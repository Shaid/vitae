/*
 * CMSPageDebug
 * Debug and logging and so forth
 *
 * @author: jtemplet
 * @version: 0.1
 * @date: 2012/03/29
 */

var DebugUtil = {
    // properties

    // functions
    init: function() {
        // for old shitty browsers that don't have a console
        var f = function() {
        };
        if (typeof window.console === 'undefined') {
            window.console = {
                log: f, info: f, warn: f, debug: f, error: f
            };
        }
        return this;
    },
    log: ((window.console && window.console.log && APP_DEBUG_STATE) ?
            console.log.bind(console) :
            function() {
            }
    ),
    info: ((window.console && window.console.log && APP_DEBUG_STATE) ?
            console.info.bind(console) :
            function() {
            }
    ),
    warn: ((window.console && window.console.log && APP_DEBUG_STATE) ?
            console.warn.bind(console) :
            function() {
            }
    ),
    debug: ((window.console && window.console.log && APP_DEBUG_STATE) ?
            console.debug.bind(console) :
            function() {
            }
    ),
    error: ((window.console && window.console.log && APP_DEBUG_STATE) ?
            console.error.bind(console) :
            function() {
            }
    )
};

module.exports = DebugUtil;