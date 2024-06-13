//Grafik 1: Peningkatan Produksi Aceh
var BAR1 = document.getElementById('barplot1');

var data1 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [1329536, 1299699, 1382905, 1419128, 1368074, 1404580, 1478712, 1486909, 1547499, 1314165, 1246614, 1350748, 1411650, 1552078, 1556858, 1402287, 1533369, 1788738, 1772962, 1582393, 2331046, 1820062, 1956940, 2180754, 2478922, 1751996.94, 1714437.6, 1861567.1],
    type: 'bar',
    marker: {
        color: 'rgb(0, 128, 255)'
    }
}];

var layout1 = {
    title: 'Peningkatan Produksi Padi di Aceh',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config1 = {
    responsive: true
};

Plotly.newPlot(BAR1, data1, layout1, config1);


// Grafik 2: Peningkatan Produksi Sumatra Utara
var BAR2 = document.getElementById('barplot2');

var data2 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [2918152, 3079960, 3134533, 3136760, 3212208, 3321049, 3451430, 3514253, 3291515, 3153305, 3403075, 3418782, 3447394, 3007636, 3265834, 3340794, 3527899, 3582302, 3607403, 3715514, 3727249, 3631039, 4044829, 4387036, 4669778, 2108285, 2078902, 2076280],
    type: 'bar',
    marker: {
        color: 'rgb(255, 165, 0)'
    }
}];

var layout2 = {
    title: 'Peningkatan Produksi Sumatra Utara',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config2 = {
    responsive: true
};

Plotly.newPlot(BAR2, data2, layout2, config2);


// Grafik 3: Peningkatan Produksi Sumatra Barat
var BAR3 = document.getElementById('barplot3');

var data3 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [1806424, 1747543, 1829192, 1971180, 1787719, 1807622, 1897678, 1759059, 1668955, 1875834, 1823739, 1875188, 1907390, 1889489, 1938120, 1965634, 2105790.0, 2211248.0, 2279602.0, 2368390.0, 2430384.0, 2519020.0, 2550609.0, 2487929.0, 2810425.0, 1483076.5, 1482996.0, 1450839.7],
    type: 'bar',
    marker: {
        color: 'rgb(209, 64, 204)'
    }
}];

var layout3 = {
    title: 'Peningkatan Produksi Sumatra Barat',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config3 = {
    responsive: true
};

Plotly.newPlot(BAR3, data3, layout3, config3);


// Grafik 4: Peningkatan Produksi Riau
var BAR4 = document.getElementById('barplot4');

var data4 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [436297.0, 445361.0, 458756.0, 461905.0, 416135.0, 370124.0, 461630.0, 431351.0, 413391.0, 396644.0, 414237.0, 454186.0, 424095.0, 42938.0, 490087.0, 494260.0, 531429.0, 574864.0, 535788.0, 512152.0, 434144.0, 385475.0, 393917.0, 325826.0, 337421.0, 266375.5, 230874.0, 269344.0],
    type: 'bar',
    marker: {
        color: 'rgb(56, 186, 201)'
    }
}];

var layout4 = {
    title: 'Peningkatan Produksi Riau',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config4 = {
    responsive: true
};

Plotly.newPlot(BAR4, data4, layout4, config4);


// Grafik 5: Peningkatan Produksi Jambi
var BAR5 = document.getElementById('barplot5');

var data5 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [607529.0, 564722.0, 593502.0, 657650.0, 572269.0, 550277.0, 553641.0, 536779.0, 556564.0, 561007.0, 578346.0, 579404.0, 579635.0, 544597.0,58663.0, 581704.0, 644947.0, 628828.0, 646641.0, 625164.0, 664535.0, 664720.0, 541486.0, 642095.0, 678127.0, 383045.7, 309932.7, 374376.3],
    type: 'bar',
    marker: {
        color: 'rgb(175, 213, 109)'
    }
}];

var layout5 = {
    title: 'Peningkatan Produksi Jambi',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config5 = {
    responsive: true
};

Plotly.newPlot(BAR5, data5, layout5, config5);


// Grafik 6: Peningkatan Produksi Sumatra Selatan
var BAR6 = document.getElementById('barplot6');

var data6 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [1409559.0, 1347611.0, 1557944.0, 1666591.0, 1577398.0, 1931505.0, 1789961.0, 1863643.0, 1723433.0, 1899849.0, 1977345.0, 2260794.0, 2320110.0, 2456251.0, 2753044.0, 2971286.0, 3125236.0, 3272451.0, 3384670.0, 3295247.0, 3676723.0, 3670435.0, 4247922.0, 4881089.0, 4807430.0, 2994191.8, 2603396.2, 2696877.5],
    type: 'bar',
    marker: {
        color: 'rgb(202, 31, 76)'
    }
}];

var layout6 = {
    title: 'Peningkatan Produksi Sumatra Selatan',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config6 = {
    responsive: true
};

Plotly.newPlot(BAR6, data6, layout6, config6);


// Grafik 7: Peningkatan Produksi Bengkulu
var BAR7 = document.getElementById('barplot7');

var data7 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [356709.0, 334232.0, 377337.0, 396977.0, 382123.0, 375533.0, 381577.0, 362979.0, 376973.0, 379818.0, 413375.0, 414741.0, 441276.0, 378377.0, 470469.0, 484900.0, 510160.0, 516869.0, 502552.0, 581910.0, 622832.0, 593194.0, 578654.0, 629224.0, 714017.0, 288810.5, 296472.1, 296925.2],
    type: 'bar',
    marker: {
        color: 'rgb(81, 189, 124)'
    }
}];

var layout7 = {
    title: 'Peningkatan Produksi Bengkulu',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config7 = {
    responsive: true
};

Plotly.newPlot(BAR7, data7, layout7, config7);


// Grafik 8: Peningkatan Produksi Lampung
var BAR8 = document.getElementById('barplot8');

var data8 = [{
    x: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    y: [1646900.0, 1615751.0, 1943709.0, 1971740.0, 1753656.0, 1975700.0, 1801422.0, 1946406.0, 1992726.0, 1951109.0, 1966293.0, 2091996.0, 2124144.0, 2129914.0, 2308404.0, 2341075.0, 2673844.0, 2807676.0, 2940795.0, 3101455.0, 3207002.0, 3320064.0, 3641895.0, 3831923.0, 4090654.0, 2488641.9, 2164089.3, 2604913.3],
    type: 'bar',
    marker: {
        color: 'rgb(85, 37, 198)'
    }
}];

var layout8 = {
    title: 'Peningkatan Produksi Lampung',
    xaxis: {
        title: 'Tahun'
    },
    yaxis: {
        title: 'Jumlah Produksi'
    },
    font: {
        size: 18
    }
};

var config8 = {
    responsive: true
};

Plotly.newPlot(BAR8, data8, layout8, config8);