'use strict';

/*global require*/

var ArcGisCatalogGroup = require('./ArcGisCatalogGroup');
var ArcGisMapServerCatalogItem = require('./ArcGisMapServerCatalogItem');
var BillboardCatalogItem = require('./BillboardCatalogItem');
var CesiumTerrainCatalogItem = require('./CesiumTerrainCatalogItem');
var CkanCatalogGroup = require('./CkanCatalogGroup');
var SocrataCatalogGroup = require('./SocrataCatalogGroup');
var createCatalogMemberFromType = require('./createCatalogMemberFromType');
var createCatalogItemFromUrl = require('./createCatalogItemFromUrl');
var CzmlCatalogItem = require('./CzmlCatalogItem');
var CatalogGroup = require('./CatalogGroup');
var GeoJsonCatalogItem = require('./GeoJsonCatalogItem');
var GltfCatalogItem = require('./GltfCatalogItem');
var KmlCatalogItem = require('./KmlCatalogItem');
var TileMapServiceCatalogItem = require('./TileMapServiceCatalogItem');
var WebFeatureServiceCatalogGroup = require('./WebFeatureServiceCatalogGroup');
var WebFeatureServiceCatalogItem = require('./WebFeatureServiceCatalogItem');
var WebMapServiceCatalogGroup = require('./WebMapServiceCatalogGroup');
var WebMapServiceCatalogItem = require('./WebMapServiceCatalogItem');
var WebMapTileServiceCatalogGroup = require('./WebMapTileServiceCatalogGroup');
var WebMapTileServiceCatalogItem = require('./WebMapTileServiceCatalogItem');
var WfsFeaturesCatalogGroup = require('./WfsFeaturesCatalogGroup');

var OpenStreetMapCatalogItem = require('./OpenStreetMapCatalogItem');

var CkanCatalogItem = require('./CkanCatalogItem');
var CompositeCatalogItem = require('./CompositeCatalogItem');
var CsvCatalogItem = require('./CsvCatalogItem');
var CswCatalogGroup = require('./CswCatalogGroup');
var GpxCatalogItem = require('./GpxCatalogItem');
var OgrCatalogItem = require('./OgrCatalogItem');
var AbsIttCatalogGroup = require('./AbsIttCatalogGroup');
var AbsIttCatalogItem = require('./AbsIttCatalogItem');

var registerCatalogMembers = function() {
    createCatalogMemberFromType.register('billboard', BillboardCatalogItem);
    createCatalogMemberFromType.register('ckan', CkanCatalogGroup);
    createCatalogMemberFromType.register('composite', CompositeCatalogItem);
    createCatalogMemberFromType.register('csv', CsvCatalogItem);
    createCatalogMemberFromType.register('csw', CswCatalogGroup);
    createCatalogMemberFromType.register('ctp', CesiumTerrainCatalogItem);
    createCatalogMemberFromType.register('czml', CzmlCatalogItem);
    createCatalogMemberFromType.register('esri-mapServer', ArcGisMapServerCatalogItem);
    createCatalogMemberFromType.register('esri-mapServer-group', ArcGisCatalogGroup);
    createCatalogMemberFromType.register('esri-group', ArcGisCatalogGroup);
    createCatalogMemberFromType.register('geojson', GeoJsonCatalogItem);
    createCatalogMemberFromType.register('gltf', GltfCatalogItem);
    createCatalogMemberFromType.register('gpx', GpxCatalogItem);
    createCatalogMemberFromType.register('group', CatalogGroup);
    createCatalogMemberFromType.register('kml', KmlCatalogItem);
    createCatalogMemberFromType.register('kmz', KmlCatalogItem);
    createCatalogMemberFromType.register('tms', TileMapServiceCatalogItem);
    createCatalogMemberFromType.register('ogr', OgrCatalogItem);
    createCatalogMemberFromType.register('socrata', SocrataCatalogGroup);
    createCatalogMemberFromType.register('wfs', WebFeatureServiceCatalogItem);
    createCatalogMemberFromType.register('wfs-getCapabilities', WebFeatureServiceCatalogGroup);
    createCatalogMemberFromType.register('wfs-features-group', WfsFeaturesCatalogGroup);
    createCatalogMemberFromType.register('wms', WebMapServiceCatalogItem);
    createCatalogMemberFromType.register('wms-getCapabilities', WebMapServiceCatalogGroup);
    createCatalogMemberFromType.register('wmts', WebMapTileServiceCatalogItem);
    createCatalogMemberFromType.register('wmts-getCapabilities', WebMapTileServiceCatalogGroup);
    createCatalogMemberFromType.register('open-street-map', OpenStreetMapCatalogItem);
    createCatalogMemberFromType.register('abs-itt', AbsIttCatalogItem);
    createCatalogMemberFromType.register('abs-itt-dataset-list', AbsIttCatalogGroup);
    createCatalogMemberFromType.register('ckan-resource', CkanCatalogItem);

    createCatalogItemFromUrl.register(matchesExtension('csv'), CsvCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('czm'), CzmlCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('czml'), CzmlCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('geojson'), GeoJsonCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('gpx'), GpxCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('json'), GeoJsonCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('kml'), KmlCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('kmz'), KmlCatalogItem);
    createCatalogItemFromUrl.register(matchesExtension('topojson'), GeoJsonCatalogItem);
    createCatalogItemFromUrl.register(matchAll, OgrCatalogItem);
};

function matchesExtension(extension) {
    var regex = new RegExp('\\.' + extension + '$', 'i');
    return function(url) {
        return url.match(regex);
    };
}

function matchAll() {
    return true;
}

module.exports = registerCatalogMembers;
