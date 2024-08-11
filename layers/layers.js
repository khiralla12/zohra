var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "حدود السورتيهات والقري",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> حدود السورتيهات والقري'
            });
var format___2 = new ol.format.GeoJSON();
var features___2 = format___2.readFeatures(json___2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___2.addFeatures(features___2);
var lyr___2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___2, 
                style: style___2,
                popuplayertitle: "محولات_زهرة",
                interactive: true,
                title: '<img src="styles/legend/__2.png" /> محولات_زهرة'
            });
var format____UP_3 = new ol.format.GeoJSON();
var features____UP_3 = format____UP_3.readFeatures(json____UP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource____UP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource____UP_3.addFeatures(features____UP_3);
var lyr____UP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource____UP_3, 
                style: style____UP_3,
                popuplayertitle: "موصل_هوائي_منخفض_زهرةUP",
                interactive: true,
                title: '<img src="styles/legend/___UP_3.png" /> موصل_هوائي_منخفض_زهرةUP'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: "اعمدةزهرة_اخرابديت",
                interactive: true,
    title: 'اعمدةزهرة_اخرابديت<br />\
    <img src="styles/legend/__4_0.png" /> عمود 350/10 مجلفن قائم<br />\
    <img src="styles/legend/__4_1.png" /> عمود جديد مجلفن 350/10<br />\
    <img src="styles/legend/__4_2.png" /> عمود جديد مجلفن 350/10 + كشاف إنارة<br />\
    <img src="styles/legend/__4_3.png" /> عمود جديد مجلفن 350/8<br />\
    <img src="styles/legend/__4_4.png" /> عمود جديد مجلفن 350/8 + كشاف إنارة<br />\
    <img src="styles/legend/__4_5.png" /> عمود حديد قائم<br />\
    <img src="styles/legend/__4_6.png" /> عمود حديد قائم + كشاف إنارة<br />\
    <img src="styles/legend/__4_7.png" /> عمود مجلفن قائم<br />\
    <img src="styles/legend/__4_8.png" /> عمود مجلفن قائم + كشاف إنارة<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr__1.setVisible(true);lyr___2.setVisible(true);lyr____UP_3.setVisible(true);lyr___4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr__1,lyr___2,lyr____UP_3,lyr___4];
lyr__1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAME': 'NAME', 'المجل': 'المجل', 'numb': 'numb', 'الحال': 'الحال', });
lyr___2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Z': 'Z', 'TYPE': 'TYPE', 'القري': 'القري', 'الاسم': 'الاسم', 'القدر': 'القدر', });
lyr____UP_3.set('fieldAliases', {'NAME': 'NAME', 'L': 'L', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr___4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Z': 'Z', 'TYPE': 'TYPE', 'القري': 'القري', 'OBJECTID': 'OBJECTID', 'CODE': 'CODE', 'القر_1': 'القر_1', });
lyr__1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAME': 'TextEdit', 'المجل': 'TextEdit', 'numb': 'TextEdit', 'الحال': 'TextEdit', });
lyr___2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'TYPE': 'TextEdit', 'القري': 'TextEdit', 'الاسم': 'TextEdit', 'القدر': 'TextEdit', });
lyr____UP_3.set('fieldImages', {'NAME': 'TextEdit', 'L': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr___4.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Z': 'TextEdit', 'TYPE': 'TextEdit', 'القري': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODE': 'TextEdit', 'القر_1': 'TextEdit', });
lyr__1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAME': 'no label', 'المجل': 'no label', 'numb': 'no label', 'الحال': 'no label', });
lyr___2.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'TYPE': 'no label', 'القري': 'no label', 'الاسم': 'inline label - always visible', 'القدر': 'no label', });
lyr____UP_3.set('fieldLabels', {'NAME': 'no label', 'L': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr___4.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'Z': 'no label', 'TYPE': 'no label', 'القري': 'no label', 'OBJECTID': 'no label', 'CODE': 'no label', 'القر_1': 'no label', });
lyr___4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});