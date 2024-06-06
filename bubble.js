BUBBLE = document.getElementById('bubbleplot');

var data = [{
    x: [, 388591, 295664, 64137, 84773, 551321, 64733, 545149, 317869,], // jumlah jenis produk
    y: [0, 2076280, 1450840, 296925, 374376, 2696877, 269344, 2604913, 1861567], // penjualan (dalam milyar)
    mode: 'markers+text',
    marker: {
        color: ['#FFFFFF', '#09d62e', '#09d6c8', '#bb09d6', '#d60909', '#6209d6', '#09ccd6', '#bbd609', '#d609a3'],
        size: [0, 60, 55, 45, 40, 50, 30, 47, 70]
    },
    text: [' ', 'Sumatera<br>Utara', 'Sumatera<br>Barat', 'Bengkulu', 'Jambi', 'Sumatera<br>Selatan', 'Riau', 'Lampung', 'Aceh'],
    textposition: 'bottom center',
    textfont: {
        size: 12,
        color: ['#FFFFFF', '#09d62e', '#09d6c8', '#bb09d6', '#d60909', '#6209d6', '#09ccd6', '#bbd609', '#d609a3']},
    hoverinfo: 'text',
    hovertext: [
        '', // Hover text untuk setiap bubble
        '<b>Sumatera Utara</b><br>Produksi: 2,08M ton<br>Luas Lahan: 388591 ha<br>Produktivitas: 5,34 ton/ha',
        '<b>Sumatera Barat</b><br>Produksi: 1,45M ton<br>Luas Lahan: 295664 ha<br>Produktivitas: 4,91 ton/ha',
        '<b>Bengkulu</b><br>Produksi: 296925 ton<br>Luas Lahan: 64137 ha<br>Produktivitas: 4,63 ton/ha',
        '<b>Jambi</b><br>Produksi: 374376 ton<br>Luas Lahan: 84773 ha<br>Produktivitas: 4,42 ton/ha',
        '<b>Sumatera Selatan</b><br>Produksi: 2,70M ton<br>Luas Lahan: 551321 ha<br>Produktivitas: 4,89 ton/ha',
        '<b>Riau</b><br>Produksi: 269344 ton<br>Luas Lahan: 64733 ha<br>Produktivitas: 4,16 ton/ha',
        '<b>Lampung</b><br>Produksi: 2,60M ton<br>Luas Lahan: 545149 ha<br>Produktivitas: 4,78 ton/ha',
        '<b>Aceh</b><br>Produksi: 1,86M ton<br>Luas Lahan: 317869 ha<br>Produktivitas: 5,86 ton/ha'
    ]
}];

var layout = {
    font: { size: 18 },
    title: 'Produktivitas Padi Sumatera 2020',
    xaxis: {
        title: 'Luas Lahan (ha)',
        titlefont: {
            size: 16,
            color: 'black'
        },
        tickfont: {
            size: 14,
            color: 'black'
        }
    },
    yaxis: {
        title: 'Produksi Padi (ton)',
        titlefont: {
            size: 16,
            color: 'black'
        },
        tickfont: {
            size: 14,
            color: 'black'
        }
    }
};

var config = { responsive: true };

Plotly.newPlot(BUBBLE, data, layout, config);