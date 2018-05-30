const assert_usage = require('reassert/usage');
const assert_internal = require('reassert/internal');
const {compute_file_hash} = require('@reframe/utils/compute_file_hash');
const getPageHtml = require('@brillout/repage/getPageHtml');
const reconfig = require('@brillout/reconfig');

const HapiPluginServerRendering = {
    name: 'HapiPluginServerRendering',
    multiple: false,
    register,
};

module.exports = HapiPluginServerRendering;

function register(server, options) {
    server.ext('onPreResponse', handleRequest);
}

async function handleRequest(request, h) {
    if( alreadyServed(request) ) {
        return h.continue;
    }

    const html = await getHtml(request);

    if( html === null ) {
        return h.continue;
    }

    return getResponse(html, h);
}

async function getHtml(request) {
    const uri = request.url.href;
    assert_internal(uri && uri.constructor===String, uri);

    const reframeConfig = reconfig.getConfig({configFileName: 'reframe.config.js'});

    const {pageConfigs} = reframeConfig.getBuildInfo();

    const {renderToHtml, router} = reframeConfig;

    const html = await getPageHtml({pageConfigs, uri, renderToHtml, router});
    return html;
}

function getResponse(html, h) {
    const etag = compute_file_hash(html);
    const response_304 = (
        h.entity({
            etag,
        })
    );
    if( response_304 ) {
        return response_304;
    }
    const response_200 = h.response(html);
    response_200.etag(etag);
    response_200.type('text/html');
    return response_200;
}

function alreadyServed(request) {
    return (
        ! request.response.isBoom ||
        request.response.output.statusCode !== 404
    );
}
