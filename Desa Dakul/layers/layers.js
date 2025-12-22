var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WilayahDakul_1 = new ol.format.GeoJSON();
var features_WilayahDakul_1 = format_WilayahDakul_1.readFeatures(json_WilayahDakul_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahDakul_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahDakul_1.addFeatures(features_WilayahDakul_1);
var lyr_WilayahDakul_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WilayahDakul_1, 
                style: style_WilayahDakul_1,
                popuplayertitle: 'Wilayah Dakul',
                interactive: true,
                title: '<img src="styles/legend/WilayahDakul_1.png" /> Wilayah Dakul'
            });
var format_tempatibadah_2 = new ol.format.GeoJSON();
var features_tempatibadah_2 = format_tempatibadah_2.readFeatures(json_tempatibadah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatibadah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatibadah_2.addFeatures(features_tempatibadah_2);
var lyr_tempatibadah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatibadah_2,
maxResolution:0.7001116538065492,
 
                style: style_tempatibadah_2,
                popuplayertitle: 'tempat ibadah',
                interactive: true,
                title: '<img src="styles/legend/tempatibadah_2.png" /> tempat ibadah'
            });
var format_JlDesa_3 = new ol.format.GeoJSON();
var features_JlDesa_3 = format_JlDesa_3.readFeatures(json_JlDesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlDesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlDesa_3.addFeatures(features_JlDesa_3);
var lyr_JlDesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlDesa_3,
maxResolution:1.4002233076130983,
 
                style: style_JlDesa_3,
                popuplayertitle: 'Jl.Desa',
                interactive: true,
                title: '<img src="styles/legend/JlDesa_3.png" /> Jl.Desa'
            });
var format_JlKec_4 = new ol.format.GeoJSON();
var features_JlKec_4 = format_JlKec_4.readFeatures(json_JlKec_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlKec_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlKec_4.addFeatures(features_JlKec_4);
var lyr_JlKec_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlKec_4,
maxResolution:1.4002233076130983,
 
                style: style_JlKec_4,
                popuplayertitle: 'Jl.Kec',
                interactive: true,
                title: '<img src="styles/legend/JlKec_4.png" /> Jl.Kec'
            });
var format_pendidikan_5 = new ol.format.GeoJSON();
var features_pendidikan_5 = format_pendidikan_5.readFeatures(json_pendidikan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pendidikan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pendidikan_5.addFeatures(features_pendidikan_5);
var lyr_pendidikan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pendidikan_5,
maxResolution:0.7001116538065492,
 
                style: style_pendidikan_5,
                popuplayertitle: 'pendidikan',
                interactive: true,
                title: '<img src="styles/legend/pendidikan_5.png" /> pendidikan'
            });
var format_wisata_6 = new ol.format.GeoJSON();
var features_wisata_6 = format_wisata_6.readFeatures(json_wisata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wisata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wisata_6.addFeatures(features_wisata_6);
var lyr_wisata_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wisata_6,
maxResolution:0.7001116538065492,
 
                style: style_wisata_6,
                popuplayertitle: 'wisata',
                interactive: true,
                title: '<img src="styles/legend/wisata_6.png" /> wisata'
            });
var format_instansipemerintah_7 = new ol.format.GeoJSON();
var features_instansipemerintah_7 = format_instansipemerintah_7.readFeatures(json_instansipemerintah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_instansipemerintah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_instansipemerintah_7.addFeatures(features_instansipemerintah_7);
var lyr_instansipemerintah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_instansipemerintah_7,
maxResolution:0.7001116538065492,
 
                style: style_instansipemerintah_7,
                popuplayertitle: 'instansi pemerintah',
                interactive: true,
                title: '<img src="styles/legend/instansipemerintah_7.png" /> instansi pemerintah'
            });
var format_BatasRW_8 = new ol.format.GeoJSON();
var features_BatasRW_8 = format_BatasRW_8.readFeatures(json_BatasRW_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasRW_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasRW_8.addFeatures(features_BatasRW_8);
var lyr_BatasRW_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasRW_8,
maxResolution:2.8004466152261966,
 
                style: style_BatasRW_8,
                popuplayertitle: 'Batas RW',
                interactive: true,
    title: 'Batas RW<br />\
    <img src="styles/legend/BatasRW_8_0.png" /> RW 1<br />\
    <img src="styles/legend/BatasRW_8_1.png" /> RW 2<br />\
    <img src="styles/legend/BatasRW_8_2.png" /> RW 3<br />\
    <img src="styles/legend/BatasRW_8_3.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_WilayahDakul_1.setVisible(true);lyr_tempatibadah_2.setVisible(true);lyr_JlDesa_3.setVisible(true);lyr_JlKec_4.setVisible(true);lyr_pendidikan_5.setVisible(true);lyr_wisata_6.setVisible(true);lyr_instansipemerintah_7.setVisible(true);lyr_BatasRW_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WilayahDakul_1,lyr_tempatibadah_2,lyr_JlDesa_3,lyr_JlKec_4,lyr_pendidikan_5,lyr_wisata_6,lyr_instansipemerintah_7,lyr_BatasRW_8];
lyr_WilayahDakul_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_tempatibadah_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_JlDesa_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_JlKec_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lebar': 'lebar', });
lyr_pendidikan_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jmlh guru': 'jmlh guru', });
lyr_wisata_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_instansipemerintah_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'jmlh kar': 'jmlh kar', });
lyr_BatasRW_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_WilayahDakul_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_tempatibadah_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_JlDesa_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': 'TextEdit', });
lyr_JlKec_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'lebar': 'TextEdit', });
lyr_pendidikan_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jmlh guru': 'TextEdit', });
lyr_wisata_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_instansipemerintah_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'jmlh kar': 'TextEdit', });
lyr_BatasRW_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_WilayahDakul_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_tempatibadah_2.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_JlDesa_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_JlKec_4.set('fieldLabels', {'id': 'no label', 'nama': 'header label - visible with data', 'lebar': 'no label', });
lyr_pendidikan_5.set('fieldLabels', {'id': 'header label - visible with data', 'nama': 'no label', 'jmlh guru': 'no label', });
lyr_wisata_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_instansipemerintah_7.set('fieldLabels', {'id': 'header label - visible with data', 'nama': 'no label', 'jmlh kar': 'no label', });
lyr_BatasRW_8.set('fieldLabels', {'id': 'no label', 'nama': 'header label - visible with data', });
lyr_BatasRW_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});