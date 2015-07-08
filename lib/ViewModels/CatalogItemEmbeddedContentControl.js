'use strict';

/*global require*/

var defined = require('terriajs-cesium/Source/Core/defined');
var DeveloperError = require('terriajs-cesium/Source/Core/DeveloperError');

var CatalogItemControl = require('./CatalogItemControl');
var EmbeddedContentPopupViewModel = require('../ViewModels/EmbeddedContentPopupViewModel');
var svgBinoculars = require('../SvgPaths/svgBinoculars');
var inherit = require('../Core/inherit');

/**
 * The view-model for a download control for catalog items. Clicking the control shows the
 * embedded content in a popup.
 *
 * @alias CatalogItemEmbeddedContentControl
 * @constructor
 * @abstract
 *
 * @param {CatalogItem} catalogItem The CatalogItem instance.
 * @param {String} url The url ofthe embedded content.
 */
var CatalogItemEmbeddedContentControl = function(catalogItem, url) {
    CatalogItemControl.call(this, catalogItem);

    /**
     * Getsor sets the url of the embedded content.
     * @memberOf CatalogItemEmbeddedContentControl.prototype
     * @type {String}
     */
    this.url = url;

    /**
     * Gets or sets the name of the control which is set as the control's title.
     * This property is observable.
     * @type {String}
     */
    this.name = 'View the embedded content associated with this item.';

    /**
     * Gets or sets the text to be displayed as a button in the now viewing panel.
     * This property is observable.
     * @type {String}
     */
    this.text = "View Content";

    /**
     * Gets or sets the svg icon of the control.  This property is observable.
     * @type {Object}
     */
    this.svgIcon = svgBinoculars;

    /**
     * Gets or sets the height of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgHeight = 85.714;

    /**
     * Gets or sets the width of the svg icon.  This property is observable.
     * @type {Integer}
     */
    this.svgWidth = 85.714;

};

inherit(CatalogItemControl, CatalogItemEmbeddedContentControl);

/**
 * When implemented in a derived class, performs an action when the user clicks
 * on this control.
 * @abstract
 * @protected
 */
CatalogItemEmbeddedContentControl.prototype.activate = function() {
    if (!defined(this.url)) {
        throw new DeveloperError('No embedded content url set.');
    }

    EmbeddedContentPopupViewModel.open({
        container: 'ui',
        url: this.url,
        title: this.item.name
    });
};

module.exports = CatalogItemEmbeddedContentControl;