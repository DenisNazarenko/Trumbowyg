(function ($) {
    'use strict';

    var defaultOptions = {};

    function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2);
    }

    function colorToHex(rgb) {
        if (rgb.search('rgb') === -1) {
            return rgb.replace('#', '');
        } else if (rgb === 'rgba(0, 0, 0, 0)') {
            return 'transparent';
        } else {
            rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
            return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
    }

    // Gray tag button definition
    function grayTagBtnDef (trumbowyg) {
        return {
            fn: 'backColor',
            forceCss: true,
            hasIcon: false,
            style: 'background-color: #CCCCCC;',
            text: trumbowyg.lang.highlight,
            value: '#CCCCCC'
        };
    }
    
    // Green tag button definition
    function greenTagBtnDef (trumbowyg) {
        return {
            forceCss: true,
            hasIcon: false,
            style: 'background-color: #AFCD29;',
            text: trumbowyg.lang.highlight,
            value: '#AFCD29'
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

    function backgroundTagHandler (element, trumbowyg) {
        var tags = [];

        if (!element.style) {
            return tags;
        }

        // background color
        if (element.style.backgroundColor !== '') {
            var backColor = colorToHex(element.style.backgroundColor);
            tags.push('backColor' + backColor);
        }

        return tags;
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
                },
                tagHandler: backgroundTagHandler
            }
        }
    });
}(jQuery));