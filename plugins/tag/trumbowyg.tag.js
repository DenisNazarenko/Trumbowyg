(function ($) {
    'use strict';

    var defaultOptions = {};

    // Gray tag button definition
    function grayTagBtnDef (trumbowyg) {
        return {
            fn: 'backColor',
            forceCss: true,
            hasIcon: false,
            param: '#CCCCCC',
            text: trumbowyg.lang.highlight,
        };
    }
    
    // Green tag button definition
    function greenTagBtnDef (trumbowyg) {
        return {
            fn: 'backColor',
            forceCss: true,
            hasIcon: false,
            param: '#AFCD29',
            text: trumbowyg.lang.highlight,
        };
    }

    // Remove tag button definition
    function removeTagBtnDef (trumbowyg) {
        return {
            fn: 'removeFormat',
            hasIcon: false,
            text: trumbowyg.lang.cancel
        };
    }

    $.extend(true, $.trumbowyg, {
        langs: {
            de: {
                cancel: 'Aufheben',
                highlight: 'Markieren'
            },
            en: {
                cancel: 'Cancel',
                highlight: 'To mark'
            }
        },
        plugins: {
            tag: {
                init: function (trumbowyg) {
                    trumbowyg.o.plugins.tag = $.extend(true, {},
                        defaultOptions,
                        trumbowyg.o.plugins.tag || {}
                    );

                    trumbowyg.addBtnDef('grayTag', grayTagBtnDef(trumbowyg));
                    trumbowyg.addBtnDef('greenTag', greenTagBtnDef(trumbowyg));
                    trumbowyg.addBtnDef('removeTag', removeTagBtnDef(trumbowyg));
                }
            }
        }
    });
}(jQuery));