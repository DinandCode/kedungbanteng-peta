var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADM_JAWA_TENGAH_KEC_1 = new ol.format.GeoJSON();
var features_ADM_JAWA_TENGAH_KEC_1 = format_ADM_JAWA_TENGAH_KEC_1.readFeatures(json_ADM_JAWA_TENGAH_KEC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_JAWA_TENGAH_KEC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADM_JAWA_TENGAH_KEC_1.addFeatures(features_ADM_JAWA_TENGAH_KEC_1);
var lyr_ADM_JAWA_TENGAH_KEC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADM_JAWA_TENGAH_KEC_1, 
                style: style_ADM_JAWA_TENGAH_KEC_1,
                popuplayertitle: 'ADM_JAWA_TENGAH_KEC',
                interactive: true,
                title: '<img src="styles/legend/ADM_JAWA_TENGAH_KEC_1.png" /> ADM_JAWA_TENGAH_KEC'
            });
var format_DesaKarangsalamKidul_2 = new ol.format.GeoJSON();
var features_DesaKarangsalamKidul_2 = format_DesaKarangsalamKidul_2.readFeatures(json_DesaKarangsalamKidul_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKarangsalamKidul_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKarangsalamKidul_2.addFeatures(features_DesaKarangsalamKidul_2);
var lyr_DesaKarangsalamKidul_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKarangsalamKidul_2, 
                style: style_DesaKarangsalamKidul_2,
                popuplayertitle: 'Desa Karangsalam Kidul',
                interactive: true,
                title: '<img src="styles/legend/DesaKarangsalamKidul_2.png" /> Desa Karangsalam Kidul'
            });
var format_DesaBeji_3 = new ol.format.GeoJSON();
var features_DesaBeji_3 = format_DesaBeji_3.readFeatures(json_DesaBeji_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaBeji_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaBeji_3.addFeatures(features_DesaBeji_3);
var lyr_DesaBeji_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaBeji_3, 
                style: style_DesaBeji_3,
                popuplayertitle: 'Desa Beji',
                interactive: true,
                title: '<img src="styles/legend/DesaBeji_3.png" /> Desa Beji'
            });
var format_DesaBaseh_4 = new ol.format.GeoJSON();
var features_DesaBaseh_4 = format_DesaBaseh_4.readFeatures(json_DesaBaseh_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaBaseh_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaBaseh_4.addFeatures(features_DesaBaseh_4);
var lyr_DesaBaseh_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaBaseh_4, 
                style: style_DesaBaseh_4,
                popuplayertitle: 'Desa Baseh',
                interactive: true,
                title: '<img src="styles/legend/DesaBaseh_4.png" /> Desa Baseh'
            });
var format_DesaWindujaya_5 = new ol.format.GeoJSON();
var features_DesaWindujaya_5 = format_DesaWindujaya_5.readFeatures(json_DesaWindujaya_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaWindujaya_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaWindujaya_5.addFeatures(features_DesaWindujaya_5);
var lyr_DesaWindujaya_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaWindujaya_5, 
                style: style_DesaWindujaya_5,
                popuplayertitle: 'Desa Windujaya',
                interactive: true,
                title: '<img src="styles/legend/DesaWindujaya_5.png" /> Desa Windujaya'
            });
var format_DesaMelung_6 = new ol.format.GeoJSON();
var features_DesaMelung_6 = format_DesaMelung_6.readFeatures(json_DesaMelung_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaMelung_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaMelung_6.addFeatures(features_DesaMelung_6);
var lyr_DesaMelung_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaMelung_6, 
                style: style_DesaMelung_6,
                popuplayertitle: 'Desa Melung',
                interactive: true,
                title: '<img src="styles/legend/DesaMelung_6.png" /> Desa Melung'
            });
var format_DesaKutaliman_7 = new ol.format.GeoJSON();
var features_DesaKutaliman_7 = format_DesaKutaliman_7.readFeatures(json_DesaKutaliman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKutaliman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKutaliman_7.addFeatures(features_DesaKutaliman_7);
var lyr_DesaKutaliman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKutaliman_7, 
                style: style_DesaKutaliman_7,
                popuplayertitle: 'Desa Kutaliman',
                interactive: true,
                title: '<img src="styles/legend/DesaKutaliman_7.png" /> Desa Kutaliman'
            });
var format_DesaKeniten_8 = new ol.format.GeoJSON();
var features_DesaKeniten_8 = format_DesaKeniten_8.readFeatures(json_DesaKeniten_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKeniten_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKeniten_8.addFeatures(features_DesaKeniten_8);
var lyr_DesaKeniten_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKeniten_8, 
                style: style_DesaKeniten_8,
                popuplayertitle: 'Desa Keniten',
                interactive: true,
                title: '<img src="styles/legend/DesaKeniten_8.png" /> Desa Keniten'
            });
var format_DesaKedungbanteng_9 = new ol.format.GeoJSON();
var features_DesaKedungbanteng_9 = format_DesaKedungbanteng_9.readFeatures(json_DesaKedungbanteng_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKedungbanteng_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKedungbanteng_9.addFeatures(features_DesaKedungbanteng_9);
var lyr_DesaKedungbanteng_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKedungbanteng_9, 
                style: style_DesaKedungbanteng_9,
                popuplayertitle: 'Desa Kedungbanteng',
                interactive: true,
                title: '<img src="styles/legend/DesaKedungbanteng_9.png" /> Desa Kedungbanteng'
            });
var format_PolyLap_10 = new ol.format.GeoJSON();
var features_PolyLap_10 = format_PolyLap_10.readFeatures(json_PolyLap_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyLap_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyLap_10.addFeatures(features_PolyLap_10);
var lyr_PolyLap_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyLap_10, 
                style: style_PolyLap_10,
                popuplayertitle: 'PolyLap',
                interactive: true,
                title: '<img src="styles/legend/PolyLap_10.png" /> PolyLap'
            });
var format_PolyRT_11 = new ol.format.GeoJSON();
var features_PolyRT_11 = format_PolyRT_11.readFeatures(json_PolyRT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyRT_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyRT_11.addFeatures(features_PolyRT_11);
var lyr_PolyRT_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyRT_11, 
                style: style_PolyRT_11,
                popuplayertitle: 'PolyRT',
                interactive: true,
                title: '<img src="styles/legend/PolyRT_11.png" /> PolyRT'
            });
var format_PolyRW_12 = new ol.format.GeoJSON();
var features_PolyRW_12 = format_PolyRW_12.readFeatures(json_PolyRW_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolyRW_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolyRW_12.addFeatures(features_PolyRW_12);
var lyr_PolyRW_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolyRW_12, 
                style: style_PolyRW_12,
                popuplayertitle: 'PolyRW',
                interactive: true,
                title: '<img src="styles/legend/PolyRW_12.png" /> PolyRW'
            });
var format_Bangunan_13 = new ol.format.GeoJSON();
var features_Bangunan_13 = format_Bangunan_13.readFeatures(json_Bangunan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_13.addFeatures(features_Bangunan_13);
var lyr_Bangunan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_13, 
                style: style_Bangunan_13,
                popuplayertitle: 'Bangunan',
                interactive: true,
                title: '<img src="styles/legend/Bangunan_13.png" /> Bangunan'
            });
var format_polysawah_14 = new ol.format.GeoJSON();
var features_polysawah_14 = format_polysawah_14.readFeatures(json_polysawah_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polysawah_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polysawah_14.addFeatures(features_polysawah_14);
var lyr_polysawah_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polysawah_14, 
                style: style_polysawah_14,
                popuplayertitle: 'poly sawah',
                interactive: true,
                title: '<img src="styles/legend/polysawah_14.png" /> poly sawah'
            });
var format_pasar_15 = new ol.format.GeoJSON();
var features_pasar_15 = format_pasar_15.readFeatures(json_pasar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pasar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pasar_15.addFeatures(features_pasar_15);
var lyr_pasar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pasar_15, 
                style: style_pasar_15,
                popuplayertitle: 'pasar',
                interactive: true,
                title: '<img src="styles/legend/pasar_15.png" /> pasar'
            });
var format_lapangan_16 = new ol.format.GeoJSON();
var features_lapangan_16 = format_lapangan_16.readFeatures(json_lapangan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lapangan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lapangan_16.addFeatures(features_lapangan_16);
var lyr_lapangan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lapangan_16, 
                style: style_lapangan_16,
                popuplayertitle: 'lapangan',
                interactive: true,
                title: '<img src="styles/legend/lapangan_16.png" /> lapangan'
            });
var format_kuburan_17 = new ol.format.GeoJSON();
var features_kuburan_17 = format_kuburan_17.readFeatures(json_kuburan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kuburan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kuburan_17.addFeatures(features_kuburan_17);
var lyr_kuburan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kuburan_17, 
                style: style_kuburan_17,
                popuplayertitle: 'kuburan',
                interactive: true,
                title: '<img src="styles/legend/kuburan_17.png" /> kuburan'
            });
var format_kesehatan_18 = new ol.format.GeoJSON();
var features_kesehatan_18 = format_kesehatan_18.readFeatures(json_kesehatan_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_18.addFeatures(features_kesehatan_18);
var lyr_kesehatan_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kesehatan_18, 
                style: style_kesehatan_18,
                popuplayertitle: 'kesehatan',
                interactive: true,
                title: '<img src="styles/legend/kesehatan_18.png" /> kesehatan'
            });
var format_jalanstapak_19 = new ol.format.GeoJSON();
var features_jalanstapak_19 = format_jalanstapak_19.readFeatures(json_jalanstapak_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanstapak_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanstapak_19.addFeatures(features_jalanstapak_19);
var lyr_jalanstapak_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanstapak_19, 
                style: style_jalanstapak_19,
                popuplayertitle: 'jalan stapak',
                interactive: true,
                title: '<img src="styles/legend/jalanstapak_19.png" /> jalan stapak'
            });
var format_jalanRt_20 = new ol.format.GeoJSON();
var features_jalanRt_20 = format_jalanRt_20.readFeatures(json_jalanRt_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanRt_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanRt_20.addFeatures(features_jalanRt_20);
var lyr_jalanRt_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanRt_20, 
                style: style_jalanRt_20,
                popuplayertitle: 'jalan Rt',
                interactive: true,
                title: '<img src="styles/legend/jalanRt_20.png" /> jalan Rt'
            });
var format_jalankereta_21 = new ol.format.GeoJSON();
var features_jalankereta_21 = format_jalankereta_21.readFeatures(json_jalankereta_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankereta_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankereta_21.addFeatures(features_jalankereta_21);
var lyr_jalankereta_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankereta_21, 
                style: style_jalankereta_21,
                popuplayertitle: 'jalan kereta',
                interactive: true,
                title: '<img src="styles/legend/jalankereta_21.png" /> jalan kereta'
            });
var format_jalankecamatan_22 = new ol.format.GeoJSON();
var features_jalankecamatan_22 = format_jalankecamatan_22.readFeatures(json_jalankecamatan_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalankecamatan_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalankecamatan_22.addFeatures(features_jalankecamatan_22);
var lyr_jalankecamatan_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalankecamatan_22, 
                style: style_jalankecamatan_22,
                popuplayertitle: 'jalan kecamatan',
                interactive: true,
                title: '<img src="styles/legend/jalankecamatan_22.png" /> jalan kecamatan'
            });
var format_jalandesa_23 = new ol.format.GeoJSON();
var features_jalandesa_23 = format_jalandesa_23.readFeatures(json_jalandesa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_23.addFeatures(features_jalandesa_23);
var lyr_jalandesa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_23, 
                style: style_jalandesa_23,
                popuplayertitle: 'jalan desa',
                interactive: true,
                title: '<img src="styles/legend/jalandesa_23.png" /> jalan desa'
            });
var format_instansipemerintah_24 = new ol.format.GeoJSON();
var features_instansipemerintah_24 = format_instansipemerintah_24.readFeatures(json_instansipemerintah_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_instansipemerintah_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_instansipemerintah_24.addFeatures(features_instansipemerintah_24);
var lyr_instansipemerintah_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_instansipemerintah_24, 
                style: style_instansipemerintah_24,
                popuplayertitle: 'instansi pemerintah',
                interactive: true,
                title: '<img src="styles/legend/instansipemerintah_24.png" /> instansi pemerintah'
            });
var format_DesaKebocoran_25 = new ol.format.GeoJSON();
var features_DesaKebocoran_25 = format_DesaKebocoran_25.readFeatures(json_DesaKebocoran_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKebocoran_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKebocoran_25.addFeatures(features_DesaKebocoran_25);
var lyr_DesaKebocoran_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKebocoran_25, 
                style: style_DesaKebocoran_25,
                popuplayertitle: 'Desa Kebocoran',
                interactive: true,
                title: '<img src="styles/legend/DesaKebocoran_25.png" /> Desa Kebocoran'
            });
var format_DesaKarangnangka_26 = new ol.format.GeoJSON();
var features_DesaKarangnangka_26 = format_DesaKarangnangka_26.readFeatures(json_DesaKarangnangka_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKarangnangka_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKarangnangka_26.addFeatures(features_DesaKarangnangka_26);
var lyr_DesaKarangnangka_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKarangnangka_26, 
                style: style_DesaKarangnangka_26,
                popuplayertitle: 'Desa Karangnangka',
                interactive: true,
                title: '<img src="styles/legend/DesaKarangnangka_26.png" /> Desa Karangnangka'
            });
var format_DesaKalisalak_27 = new ol.format.GeoJSON();
var features_DesaKalisalak_27 = format_DesaKalisalak_27.readFeatures(json_DesaKalisalak_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKalisalak_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKalisalak_27.addFeatures(features_DesaKalisalak_27);
var lyr_DesaKalisalak_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKalisalak_27, 
                style: style_DesaKalisalak_27,
                popuplayertitle: 'DesaKalisalak',
                interactive: true,
                title: '<img src="styles/legend/DesaKalisalak_27.png" /> DesaKalisalak'
            });
var format_DesaKalikesur_28 = new ol.format.GeoJSON();
var features_DesaKalikesur_28 = format_DesaKalikesur_28.readFeatures(json_DesaKalikesur_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaKalikesur_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaKalikesur_28.addFeatures(features_DesaKalikesur_28);
var lyr_DesaKalikesur_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaKalikesur_28, 
                style: style_DesaKalikesur_28,
                popuplayertitle: 'DesaKalikesur',
                interactive: true,
                title: '<img src="styles/legend/DesaKalikesur_28.png" /> DesaKalikesur'
            });
var format_DesaDawuhanWetan_29 = new ol.format.GeoJSON();
var features_DesaDawuhanWetan_29 = format_DesaDawuhanWetan_29.readFeatures(json_DesaDawuhanWetan_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaDawuhanWetan_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaDawuhanWetan_29.addFeatures(features_DesaDawuhanWetan_29);
var lyr_DesaDawuhanWetan_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaDawuhanWetan_29, 
                style: style_DesaDawuhanWetan_29,
                popuplayertitle: 'Desa DawuhanWetan',
                interactive: true,
                title: '<img src="styles/legend/DesaDawuhanWetan_29.png" /> Desa DawuhanWetan'
            });
var format_DesaDawuhanKulon_30 = new ol.format.GeoJSON();
var features_DesaDawuhanKulon_30 = format_DesaDawuhanKulon_30.readFeatures(json_DesaDawuhanKulon_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaDawuhanKulon_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaDawuhanKulon_30.addFeatures(features_DesaDawuhanKulon_30);
var lyr_DesaDawuhanKulon_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaDawuhanKulon_30, 
                style: style_DesaDawuhanKulon_30,
                popuplayertitle: 'Desa DawuhanKulon',
                interactive: true,
                title: '<img src="styles/legend/DesaDawuhanKulon_30.png" /> Desa DawuhanKulon'
            });
var format_Balaidesa_31 = new ol.format.GeoJSON();
var features_Balaidesa_31 = format_Balaidesa_31.readFeatures(json_Balaidesa_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balaidesa_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balaidesa_31.addFeatures(features_Balaidesa_31);
var lyr_Balaidesa_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balaidesa_31, 
                style: style_Balaidesa_31,
                popuplayertitle: 'Balai desa',
                interactive: true,
                title: '<img src="styles/legend/Balaidesa_31.png" /> Balai desa'
            });
var format_JlnKecamatan_32 = new ol.format.GeoJSON();
var features_JlnKecamatan_32 = format_JlnKecamatan_32.readFeatures(json_JlnKecamatan_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlnKecamatan_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlnKecamatan_32.addFeatures(features_JlnKecamatan_32);
var lyr_JlnKecamatan_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlnKecamatan_32, 
                style: style_JlnKecamatan_32,
                popuplayertitle: 'Jln.Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/JlnKecamatan_32.png" /> Jln.Kecamatan'
            });
var format_JlnDesa_33 = new ol.format.GeoJSON();
var features_JlnDesa_33 = format_JlnDesa_33.readFeatures(json_JlnDesa_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlnDesa_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlnDesa_33.addFeatures(features_JlnDesa_33);
var lyr_JlnDesa_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlnDesa_33, 
                style: style_JlnDesa_33,
                popuplayertitle: 'Jln.Desa',
                interactive: true,
                title: '<img src="styles/legend/JlnDesa_33.png" /> Jln.Desa'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_ADM_JAWA_TENGAH_KEC_1.setVisible(true);lyr_DesaKarangsalamKidul_2.setVisible(true);lyr_DesaBeji_3.setVisible(true);lyr_DesaBaseh_4.setVisible(true);lyr_DesaWindujaya_5.setVisible(true);lyr_DesaMelung_6.setVisible(true);lyr_DesaKutaliman_7.setVisible(true);lyr_DesaKeniten_8.setVisible(true);lyr_DesaKedungbanteng_9.setVisible(true);lyr_PolyLap_10.setVisible(true);lyr_PolyRT_11.setVisible(true);lyr_PolyRW_12.setVisible(true);lyr_Bangunan_13.setVisible(true);lyr_polysawah_14.setVisible(true);lyr_pasar_15.setVisible(true);lyr_lapangan_16.setVisible(true);lyr_kuburan_17.setVisible(true);lyr_kesehatan_18.setVisible(true);lyr_jalanstapak_19.setVisible(true);lyr_jalanRt_20.setVisible(true);lyr_jalankereta_21.setVisible(true);lyr_jalankecamatan_22.setVisible(true);lyr_jalandesa_23.setVisible(true);lyr_instansipemerintah_24.setVisible(true);lyr_DesaKebocoran_25.setVisible(true);lyr_DesaKarangnangka_26.setVisible(true);lyr_DesaKalisalak_27.setVisible(true);lyr_DesaKalikesur_28.setVisible(true);lyr_DesaDawuhanWetan_29.setVisible(true);lyr_DesaDawuhanKulon_30.setVisible(true);lyr_Balaidesa_31.setVisible(true);lyr_JlnKecamatan_32.setVisible(true);lyr_JlnDesa_33.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ADM_JAWA_TENGAH_KEC_1,lyr_DesaKarangsalamKidul_2,lyr_DesaBeji_3,lyr_DesaBaseh_4,lyr_DesaWindujaya_5,lyr_DesaMelung_6,lyr_DesaKutaliman_7,lyr_DesaKeniten_8,lyr_DesaKedungbanteng_9,lyr_PolyLap_10,lyr_PolyRT_11,lyr_PolyRW_12,lyr_Bangunan_13,lyr_polysawah_14,lyr_pasar_15,lyr_lapangan_16,lyr_kuburan_17,lyr_kesehatan_18,lyr_jalanstapak_19,lyr_jalanRt_20,lyr_jalankereta_21,lyr_jalankecamatan_22,lyr_jalandesa_23,lyr_instansipemerintah_24,lyr_DesaKebocoran_25,lyr_DesaKarangnangka_26,lyr_DesaKalisalak_27,lyr_DesaKalikesur_28,lyr_DesaDawuhanWetan_29,lyr_DesaDawuhanKulon_30,lyr_Balaidesa_31,lyr_JlnKecamatan_32,lyr_JlnDesa_33];
lyr_ADM_JAWA_TENGAH_KEC_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKarangsalamKidul_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_DesaBeji_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_DesaBaseh_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaWindujaya_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaMelung_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKutaliman_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKeniten_8.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKedungbanteng_9.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PolyLap_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_PolyRT_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas rt': 'luas rt', });
lyr_PolyRW_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'luasrw': 'luasrw', });
lyr_Bangunan_13.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'access_roo': 'access_roo', 'name': 'name', 'roof_mater': 'roof_mater', 'building_m': 'building_m', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', });
lyr_polysawah_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Luas_m2': 'Luas_m2', });
lyr_pasar_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_lapangan_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_kuburan_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_kesehatan_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'jmlhdok': 'jmlhdok', 'jmlhpasien': 'jmlhpasien', });
lyr_jalanstapak_19.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_jalanRt_20.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_jalankereta_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Lebar': 'Lebar', });
lyr_jalankecamatan_22.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_jalandesa_23.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_instansipemerintah_24.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', 'jmlh kar': 'jmlh kar', });
lyr_DesaKebocoran_25.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKarangnangka_26.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKalisalak_27.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaKalikesur_28.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaDawuhanWetan_29.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DesaDawuhanKulon_30.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Balaidesa_31.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luar': 'luar', 'jumlh kar': 'jumlh kar', });
lyr_JlnKecamatan_32.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_JlnDesa_33.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'lebar': 'lebar', });
lyr_ADM_JAWA_TENGAH_KEC_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKarangsalamKidul_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_DesaBeji_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_DesaBaseh_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaWindujaya_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaMelung_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKutaliman_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKeniten_8.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKedungbanteng_9.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PolyLap_10.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_PolyRT_11.set('fieldImages', {'id': '', 'nama': '', 'luas rt': '', });
lyr_PolyRW_12.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'luasrw': '', });
lyr_Bangunan_13.set('fieldImages', {'osm_id': '', 'osm_type': '', 'building': '', 'access_roo': '', 'name': '', 'roof_mater': '', 'building_m': '', 'addr_house': '', 'addr_stree': '', });
lyr_polysawah_14.set('fieldImages', {'id': '', 'nama': '', 'Luas_m2': '', });
lyr_pasar_15.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_lapangan_16.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_kuburan_17.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_kesehatan_18.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'jmlhdok': '', 'jmlhpasien': '', });
lyr_jalanstapak_19.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_jalanRt_20.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_jalankereta_21.set('fieldImages', {'id': '', 'Nama': '', 'Lebar': '', });
lyr_jalankecamatan_22.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_jalandesa_23.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_instansipemerintah_24.set('fieldImages', {'id': '', 'nama': '', 'luas': '', 'jmlh kar': '', });
lyr_DesaKebocoran_25.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKarangnangka_26.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKalisalak_27.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaKalikesur_28.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaDawuhanWetan_29.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DesaDawuhanKulon_30.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Balaidesa_31.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luar': 'TextEdit', 'jumlh kar': 'TextEdit', });
lyr_JlnKecamatan_32.set('fieldImages', {'id': '', 'nama': '', 'luas': '', });
lyr_JlnDesa_33.set('fieldImages', {'id': '', 'nama': '', 'lebar': '', });
lyr_ADM_JAWA_TENGAH_KEC_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKarangsalamKidul_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_DesaBeji_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_DesaBaseh_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaWindujaya_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaMelung_6.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKutaliman_7.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKeniten_8.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKedungbanteng_9.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PolyLap_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_PolyRT_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas rt': 'no label', });
lyr_PolyRW_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'luasrw': 'no label', });
lyr_Bangunan_13.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'access_roo': 'no label', 'name': 'no label', 'roof_mater': 'no label', 'building_m': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', });
lyr_polysawah_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'Luas_m2': 'no label', });
lyr_pasar_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_lapangan_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_kuburan_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_kesehatan_18.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'jmlhdok': 'no label', 'jmlhpasien': 'no label', });
lyr_jalanstapak_19.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_jalanRt_20.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_jalankereta_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Lebar': 'no label', });
lyr_jalankecamatan_22.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_jalandesa_23.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_instansipemerintah_24.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', 'jmlh kar': 'no label', });
lyr_DesaKebocoran_25.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKarangnangka_26.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKalisalak_27.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaKalikesur_28.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaDawuhanWetan_29.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DesaDawuhanKulon_30.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Balaidesa_31.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luar': 'no label', 'jumlh kar': 'no label', });
lyr_JlnKecamatan_32.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'luas': 'no label', });
lyr_JlnDesa_33.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'lebar': 'no label', });
lyr_JlnDesa_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});