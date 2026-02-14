// ==================== DATA.JS - HİSSƏ 1/4 ====================
// İxtisaslar məlumat bazası - DİM 2025
// Strukturu anlamaq üçün:
// - qrup: 1-5 arası qrup nömrəsi
// - alt_qrup: RK (Riyaziyyat-Kimya), Rİ (Riyaziyyat-İnformatika), DT (Dil-Tarix) və s.
// - kecid_bali: Ümumi keçid balı
// - dovlet_sifarisi_bali: Dövlət sifarişi keçid balı (varsa)

const ixtisaslar = [
    // ==================== I QRUP - BAKI DÖVLƏT UNİVERSİTETİ ====================
    {
        kod: '111114',
        ad: 'Fizika müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 348.1,
        dovlet_sifarisi_bali: 365.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111139',
        ad: 'Fizika müəllimliyi (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 407.6,
        dovlet_sifarisi_bali: 407.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111147',
        ad: 'İnformatika (rəqəmsal bacarıqlar) müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 325.6,
        dovlet_sifarisi_bali: 325.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '111163',
        ad: 'Riyaziyyat müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 522.2,
        dovlet_sifarisi_bali: 522.2,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111188',
        ad: 'Riyaziyyat müəllimliyi (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 597.5,
        dovlet_sifarisi_bali: 597.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111196',
        ad: 'Fizika',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 310.7,
        dovlet_sifarisi_bali: 310.7,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111211',
        ad: 'Fizika (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 337.5,
        dovlet_sifarisi_bali: 337.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111228',
        ad: 'Geologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 213.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111236',
        ad: 'Kompüter elmləri',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 427.9,
        dovlet_sifarisi_bali: 427.9,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '111252',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 537.3,
        dovlet_sifarisi_bali: 537.3,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '111269',
        ad: 'Mexanika',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 233.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111277',
        ad: 'Riyaziyyat',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 402.8,
        dovlet_sifarisi_bali: 402.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111293',
        ad: 'Riyaziyyat (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 515,
        dovlet_sifarisi_bali: 515,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111317',
        ad: 'Ekologiya mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 263.4,
        dovlet_sifarisi_bali: 266.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111325',
        ad: 'Geologiya və geofizika mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 206,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111333',
        ad: 'Geologiya və geofizika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 266.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111341',
        ad: 'Geomatika və geodeziya mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 220,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111358',
        ad: 'İnformasiya təhlükəsizliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 542.3,
        dovlet_sifarisi_bali: 542.3,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '111374',
        ad: 'Kimya mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 406.3,
        dovlet_sifarisi_bali: 406.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111382',
        ad: 'Kimya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 517.8,
        dovlet_sifarisi_bali: 517.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111399',
        ad: 'Qida mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 355.1,
        dovlet_sifarisi_bali: 355.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111414',
        ad: 'Meliorasiya mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 245.3,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111422',
        ad: 'Mədən mühəndisliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 230,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111439',
        ad: 'Mühəndislik fizikası',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 263.9,
        dovlet_sifarisi_bali: 263.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111447',
        ad: 'Torpaqşünaslıq və aqrokimya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 270.5,
        dovlet_sifarisi_bali: 270.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '111455',
        ad: 'Yerquruluşu və daşınmaz əmlakın kadastrı',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 295.2,
        dovlet_sifarisi_bali: 295.2,
        qrup: 1,
        alt_qrup: 'RK'
    },

    // ==================== I QRUP - AZƏRBAYCAN DÖVLƏT NEFT VƏ SƏNAYİ UNİVERSİTETİ ====================
    {
        kod: '114111',
        ad: 'Geologiya',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 216.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114128',
        ad: 'Kompüter elmləri',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 476.8,
        dovlet_sifarisi_bali: 476.8,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114144',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 567.1,
        dovlet_sifarisi_bali: 567.1,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114152',
        ad: 'Cihaz mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 209.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114177',
        ad: 'Cihaz mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 302.8,
        dovlet_sifarisi_bali: 302.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114185',
        ad: 'Data analitikası (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 562.8,
        dovlet_sifarisi_bali: 562.8,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114193',
        ad: 'Ekologiya mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 250.1,
        dovlet_sifarisi_bali: 250.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114225',
        ad: 'Ekologiya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 289.1,
        dovlet_sifarisi_bali: 291.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114233',
        ad: 'Elektrik və elektronika mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 303.1,
        dovlet_sifarisi_bali: 303.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114241',
        ad: 'Elektrik və elektronika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 453,
        dovlet_sifarisi_bali: 453,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114258',
        ad: 'Energetika mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 237.1,
        dovlet_sifarisi_bali: 237.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114274',
        ad: 'Energetika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 388.1,
        dovlet_sifarisi_bali: 388.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114282',
        ad: 'Geologiya və geofizika mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 231.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114299',
        ad: 'Geologiya və geofizika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 254.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114314',
        ad: 'Həyat fəaliyyətinin təhlükəsizliyi mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 237,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114322',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 501.9,
        dovlet_sifarisi_bali: 501.9,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114347',
        ad: 'İnformasiya texnologiyaları (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 562.1,
        dovlet_sifarisi_bali: 562.1,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114355',
        ad: 'İnformasiya təhlükəsizliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 523.1,
        dovlet_sifarisi_bali: 523.1,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114363',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 587.5,
        dovlet_sifarisi_bali: 587.5,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114371',
        ad: 'İnşaat mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 309.5,
        dovlet_sifarisi_bali: 309.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114388',
        ad: 'İnşaat mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 358,
        dovlet_sifarisi_bali: 358,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114396',
        ad: 'Kimya mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 424.7,
        dovlet_sifarisi_bali: 424.7,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114428',
        ad: 'Kimya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 624.9,
        dovlet_sifarisi_bali: 624.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114436',
        ad: 'Kompüter mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 453.6,
        dovlet_sifarisi_bali: 453.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114452',
        ad: 'Kompüter mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 544.4,
        dovlet_sifarisi_bali: 544.4,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '114469',
        ad: 'Qida mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 303.1,
        dovlet_sifarisi_bali: 325.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114477',
        ad: 'Qida mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 371.6,
        dovlet_sifarisi_bali: 371.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114485',
        ad: 'Logistika və nəqliyyat texnologiyaları mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 315.1,
        dovlet_sifarisi_bali: 315.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114493',
        ad: 'Logistika və nəqliyyat texnologiyaları mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 400.4,
        dovlet_sifarisi_bali: 400.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114517',
        ad: 'Maşın mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 200.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114525',
        ad: 'Materiallar mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114533',
        ad: 'Mexanika mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 218.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114541',
        ad: 'Mexanika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 315.9,
        dovlet_sifarisi_bali: 315.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114558',
        ad: 'Mexatronika və robototexnika mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 342.6,
        dovlet_sifarisi_bali: 342.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114566',
        ad: 'Mexatronika və robototexnika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 415.6,
        dovlet_sifarisi_bali: 415.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114574',
        ad: 'Mədən mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 204.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114582',
        ad: 'Mühəndislik fizikası',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 220.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114599',
        ad: 'Neft-qaz mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 435.8,
        dovlet_sifarisi_bali: 435.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114622',
        ad: 'Neft-qaz mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 587.8,
        dovlet_sifarisi_bali: 587.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114639',
        ad: 'Proseslərin avtomatlaşdırılması mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 358.2,
        dovlet_sifarisi_bali: 358.2,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114655',
        ad: 'Proseslərin avtomatlaşdırılması mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 450.2,
        dovlet_sifarisi_bali: 450.2,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114663',
        ad: 'Radiotexnika və telekommunikasiya mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 224.2,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114671',
        ad: 'Radiotexnika və telekommunikasiya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 263.1,
        dovlet_sifarisi_bali: 263.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114688',
        ad: 'Sənaye mühəndisliyi',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 291.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '114696',
        ad: 'Sənaye mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət Neft və Sənaye Universiteti',
        teq_for: 'Ə',
        kecid_bali: 474.4,
        dovlet_sifarisi_bali: 474.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116112',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 526.7,
        dovlet_sifarisi_bali: 526.7,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116129',
        ad: 'Kompüter elmləri',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 408,
        dovlet_sifarisi_bali: 408,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116137',
        ad: 'Aerokosmik mühəndislik',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 241.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116145',
        ad: 'Cihaz mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 223.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116153',
        ad: 'Ekologiya mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 246,
        dovlet_sifarisi_bali: 250,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116178',
        ad: 'Elektrik və elektronika mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 254.4,
        dovlet_sifarisi_bali: 254.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116186',
        ad: 'Energetika mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 201.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116194',
        ad: 'Həyat fəaliyyətinin təhlükəsizliyi mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 219.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116218',
        ad: 'İnformasiya texnologiyaları (tədris ingilis dilində)',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 548.7,
        dovlet_sifarisi_bali: 548.7,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116226',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 433.2,
        dovlet_sifarisi_bali: 433.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116242',
        ad: 'İnformasiya təhlükəsizliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 475.2,
        dovlet_sifarisi_bali: 475.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116267',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 560.4,
        dovlet_sifarisi_bali: 560.4,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116283',
        ad: 'Kimya mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 307.1,
        dovlet_sifarisi_bali: 401.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116315',
        ad: 'Kompüter mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 503.5,
        dovlet_sifarisi_bali: 503.5,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116323',
        ad: 'Kompüter mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 389.2,
        dovlet_sifarisi_bali: 389.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '116331',
        ad: 'Qida mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 328.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116348',
        ad: 'Logistika və nəqliyyat texnologiyaları mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 261.8,
        dovlet_sifarisi_bali: 261.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116364',
        ad: 'Maşın mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 224,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116389',
        ad: 'Materiallar mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 280.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116397',
        ad: 'Mexanika mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 231.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116429',
        ad: 'Mexatronika və robototexnika mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 324.8,
        dovlet_sifarisi_bali: 341.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116437',
        ad: 'Metallurgiya mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 264.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116453',
        ad: 'Nəqliyyat mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 231.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116461',
        ad: 'Proseslərin avtomatlaşdırılması mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 347,
        dovlet_sifarisi_bali: 347,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116486',
        ad: 'Radiotexnika və telekommunikasiya mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 229.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '116494',
        ad: 'Sənaye mühəndisliyi',
        universitet: 'Azərbaycan Texniki Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 293.6,
        qrup: 1,
        alt_qrup: 'RK'
    },

    // ==================== I QRUP - AZƏRBAYCAN MEMARLIQ VƏ İNŞAAT UNİVERSİTETİ ====================
    {
        kod: '118113',
        ad: 'Ekologiya mühəndisliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 241.5,
        dovlet_sifarisi_bali: 244.7,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118138',
        ad: 'Ekologiya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 267.8,
        dovlet_sifarisi_bali: 267.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118146',
        ad: 'Elektrik və elektronika mühəndisliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 214,
        dovlet_sifarisi_bali: 214,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118154',
        ad: 'Elektrik və elektronika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 306.4,
        dovlet_sifarisi_bali: 306.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118162',
        ad: 'Geomatika və geodeziya mühəndisliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 260.2,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118179',
        ad: 'Həyat fəaliyyətinin təhlükəsizliyi mühəndisliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 213.7,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118187',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 377.4,
        dovlet_sifarisi_bali: 377.4,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '118219',
        ad: 'İnformasiya texnologiyaları (tədris ingilis dilində)',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 458.3,
        dovlet_sifarisi_bali: 458.3,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '118227',
        ad: 'İnformasiya təhlükəsizliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 415.5,
        dovlet_sifarisi_bali: 415.5,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '118235',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 454.4,
        dovlet_sifarisi_bali: 454.4,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '118243',
        ad: 'İnşaat mühəndisliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 299.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118251',
        ad: 'İnşaat mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 367.7,
        dovlet_sifarisi_bali: 367.7,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118276',
        ad: 'İnşaat mühəndisliyi',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 348.4,
        dovlet_sifarisi_bali: 348.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118487',
        ad: 'Memarlıq',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 328.9,
        dovlet_sifarisi_bali: 328.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '118519',
        ad: 'Memarlıq (tədris ingilis dilində)',
        universitet: 'Azərbaycan Memarlıq və İnşaat Universiteti',
        teq_for: 'Ə',
        kecid_bali: 484.7,
        dovlet_sifarisi_bali: 484.7,
        qrup: 1,
        alt_qrup: 'RK'
    },

    // ==================== I QRUP - BAKI MÜHƏNDİSLİK UNİVERSİTETİ ====================
    {
        kod: '128117',
        ad: 'Fizika (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 260.4,
        dovlet_sifarisi_bali: 260.4,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128125',
        ad: 'Kompüter elmləri',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 394.6,
        dovlet_sifarisi_bali: 394.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128133',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 515.8,
        dovlet_sifarisi_bali: 516.1,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128158',
        ad: 'Riyaziyyat (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 347.3,
        dovlet_sifarisi_bali: 347.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128166',
        ad: 'Data analitikası (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 372.9,
        dovlet_sifarisi_bali: 556.4,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128182',
        ad: 'Ekologiya mühəndisliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 235,
        dovlet_sifarisi_bali: 240.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128214',
        ad: 'Elektrik və elektronika mühəndisliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 224.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128222',
        ad: 'Elektrik və elektronika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 281,
        dovlet_sifarisi_bali: 281,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128247',
        ad: 'Energetika mühəndisliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 244.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128255',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 415.2,
        dovlet_sifarisi_bali: 415.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128263',
        ad: 'İnformasiya texnologiyaları (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 521.7,
        dovlet_sifarisi_bali: 521.7,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128288',
        ad: 'İnformasiya təhlükəsizliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 488.1,
        dovlet_sifarisi_bali: 488.1,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128296',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 564.7,
        dovlet_sifarisi_bali: 564.7,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128311',
        ad: 'İnşaat mühəndisliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 299.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128328',
        ad: 'Kimya mühəndisliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 337.1,
        dovlet_sifarisi_bali: 401.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128336',
        ad: 'Kimya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 500.9,
        dovlet_sifarisi_bali: 500.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '128352',
        ad: 'Kompüter mühəndisliyi',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 406.6,
        dovlet_sifarisi_bali: 406.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '128369',
        ad: 'Kompüter mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Mühəndislik Universiteti',
        teq_for: 'Ə',
        kecid_bali: 515,
        dovlet_sifarisi_bali: 515,
        qrup: 1,
        alt_qrup: 'Rİ'
    },

    // ==================== I QRUP - ADA UNİVERSİTETİ ====================
    {
        kod: '131113',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'ADA Universiteti',
        teq_for: 'Ə',
        kecid_bali: 641.6,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '131138',
        ad: 'Riyaziyyat (tədris ingilis dilində)',
        universitet: 'ADA Universiteti',
        teq_for: 'Ə',
        kecid_bali: 601.4,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '131154',
        ad: 'Elektrik və elektronika mühəndisliyi (tədris ingilis dilində)',
        universitet: 'ADA Universiteti',
        teq_for: 'Ə',
        kecid_bali: 400,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '131179',
        ad: 'İnformasiya texnologiyaları (tədris ingilis dilində)',
        universitet: 'ADA Universiteti',
        teq_for: 'Ə',
        kecid_bali: 642.8,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '131219',
        ad: 'Kompüter mühəndisliyi (tədris ingilis dilində)',
        universitet: 'ADA Universiteti',
        teq_for: 'Ə',
        kecid_bali: 636.7,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },

    // ==================== I QRUP - BAKI ALİ NEFT MƏKTƏBİ ====================
    {
        kod: '141117',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 623.2,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '141133',
        ad: 'Data analitikası (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 623,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '141166',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 643.7,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '141182',
        ad: 'Kimya mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 492.9,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '141214',
        ad: 'Kompüter mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 610.1,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '141239',
        ad: 'Neft-qaz mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 501,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '141255',
        ad: 'Proseslərin avtomatlaşdırılması mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Bakı Ali Neft Məktəbi',
        teq_for: 'Ə',
        kecid_bali: 580.4,
        dovlet_sifarisi_bali: null,
        qrup: 1,
        alt_qrup: 'RK'
    },

    // ==================== II QRUP - BAKI DÖVLƏT UNİVERSİTETİ ====================
    {
        kod: '111463',
        ad: 'Coğrafiya müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 359.7,
        dovlet_sifarisi_bali: 359.7,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111488',
        ad: 'Sosiologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 345.9,
        dovlet_sifarisi_bali: 345.9,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111511',
        ad: 'Sosiologiya (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 353.7,
        dovlet_sifarisi_bali: 353.7,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111528',
        ad: 'Beynəlxalq ticarət və logistika',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 308,
        dovlet_sifarisi_bali: 417.9,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111544',
        ad: 'İqtisadiyyat',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 242.4,
        dovlet_sifarisi_bali: 442.6,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111569',
        ad: 'İqtisadiyyat (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 452,
        dovlet_sifarisi_bali: 452,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111577',
        ad: 'Maliyyə',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 341.8,
        dovlet_sifarisi_bali: 500.4,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111585',
        ad: 'Maliyyə (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 478.3,
        dovlet_sifarisi_bali: 495.3,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111593',
        ad: 'Menecment',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 275.1,
        dovlet_sifarisi_bali: 409.5,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111617',
        ad: 'Coğrafiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 324.9,
        dovlet_sifarisi_bali: 324.9,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111633',
        ad: 'Statistika',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 366.6,
        dovlet_sifarisi_bali: 366.6,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '111641',
        ad: 'Turizm işinin təşkili',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 349.9,
        dovlet_sifarisi_bali: 349.9,
        qrup: 2,
        alt_qrup: 'RK'
    },

    // ==================== II QRUP - AZƏRBAYCAN DÖVLƏT İQTİSAD UNİVERSİTETİ ====================
    {
        kod: '123346',
        ad: 'Beynəlxalq ticarət və logistika',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 425.8,
        dovlet_sifarisi_bali: 425.8,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123379',
        ad: 'Beynəlxalq ticarət və logistika (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 560.8,
        dovlet_sifarisi_bali: 560.8,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123395',
        ad: 'Biznesin idarə edilməsi',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 357,
        dovlet_sifarisi_bali: 501.4,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123435',
        ad: 'Biznesin idarə edilməsi (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 581.5,
        dovlet_sifarisi_bali: 581.5,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123451',
        ad: 'Dövlət və bələdiyyə idarəetməsi',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 322.2,
        dovlet_sifarisi_bali: 388.7,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123484',
        ad: 'İqtisadiyyat',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 467.3,
        dovlet_sifarisi_bali: 467.3,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123524',
        ad: 'İqtisadiyyat (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 593.8,
        dovlet_sifarisi_bali: 593.8,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123549',
        ad: 'Maliyyə',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 527.6,
        dovlet_sifarisi_bali: 527.6,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123581',
        ad: 'Maliyyə (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 605.6,
        dovlet_sifarisi_bali: 605.6,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123613',
        ad: 'Marketinq',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 393.8,
        dovlet_sifarisi_bali: 393.8,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123646',
        ad: 'Menecment',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 335.3,
        dovlet_sifarisi_bali: 406,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123687',
        ad: 'Mühasibat',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 429.5,
        dovlet_sifarisi_bali: 429.5,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123735',
        ad: 'Mühasibat (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 558.4,
        dovlet_sifarisi_bali: 558.4,
        qrup: 2,
        alt_qrup: 'RK'
    },
    {
        kod: '123743',
        ad: 'Statistika',
        universitet: 'Azərbaycan Dövlət İqtisad Universiteti',
        teq_for: 'Ə',
        kecid_bali: 376.8,
        dovlet_sifarisi_bali: 376.8,
        qrup: 2,
        alt_qrup: 'RK'
    },

    // ==================== III QRUP - BAKI DÖVLƏT UNİVERSİTETİ ====================
    {
        kod: '111666',
        ad: 'Azərbaycan dili və ədəbiyyatı müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 572.5,
        dovlet_sifarisi_bali: 572.5,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111682',
        ad: 'Xüsusi pedaqogika',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 458.4,
        dovlet_sifarisi_bali: 458.4,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111699',
        ad: 'Tarix müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 515.6,
        dovlet_sifarisi_bali: 515.6,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111722',
        ad: 'Tarix müəllimliyi (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 527.1,
        dovlet_sifarisi_bali: 527.1,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111755',
        ad: 'Beynəlxalq münasibətlər',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 407.6,
        dovlet_sifarisi_bali: 481.4,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111771',
        ad: 'Beynəlxalq münasibətlər (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 499.7,
        dovlet_sifarisi_bali: 499.7,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111788',
        ad: 'Dövlət və ictimai münasibətlər',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 537.5,
        dovlet_sifarisi_bali: 609,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111811',
        ad: 'Dövlət və ictimai münasibətlər (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 597.4,
        dovlet_sifarisi_bali: 608.9,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111828',
        ad: 'Fəlsəfə',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 380.5,
        dovlet_sifarisi_bali: 422.1,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111869',
        ad: 'Filologiya (Azərbaycan dili və ədəbiyyatı üzrə)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 451.1,
        dovlet_sifarisi_bali: 498.2,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111885',
        ad: 'Filologiya (alman dili və ədəbiyyatı üzrə)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 417.8,
        dovlet_sifarisi_bali: 504.6,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111893',
        ad: 'Filologiya (fransız dili və ədəbiyyatı üzrə)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 360.9,
        dovlet_sifarisi_bali: 651.3,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111917',
        ad: 'Filologiya (ingilis dili və ədəbiyyatı üzrə)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 512.7,
        dovlet_sifarisi_bali: 512.7,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111941',
        ad: 'Hüquqşünaslıq',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 621.7,
        dovlet_sifarisi_bali: 621.7,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111982',
        ad: 'Hüquqşünaslıq (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 664.5,
        dovlet_sifarisi_bali: 664.5,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '111999',
        ad: 'Kitabxanaçılıq və informasiya fəaliyyəti',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 334.2,
        dovlet_sifarisi_bali: 412,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '112127',
        ad: 'Politologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 460.4,
        dovlet_sifarisi_bali: 535.3,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '112346',
        ad: 'Tarix',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 475.3,
        dovlet_sifarisi_bali: 520.9,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '112427',
        ad: 'Sosial iş',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 505.4,
        dovlet_sifarisi_bali: 505.4,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '112451',
        ad: 'Jurnalistika',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 419.8,
        dovlet_sifarisi_bali: 423.6,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '112476',
        ad: 'Jurnalistika (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 479.9,
        dovlet_sifarisi_bali: 479.9,
        qrup: 3,
        alt_qrup: 'DT'
    },

    // ==================== III QRUP - AZƏRBAYCAN DİLLƏR UNİVERSİTETİ ====================
    {
        kod: '126116',
        ad: 'Azərbaycan dili və ədəbiyyatı müəllimliyi',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 542.8,
        dovlet_sifarisi_bali: 542.8,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126124',
        ad: 'Dil və ədəbiyyat müəllimliyi (ingilis dili və ədəbiyyatı üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 550.5,
        dovlet_sifarisi_bali: 550.5,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126132',
        ad: 'Dil və ədəbiyyat müəllimliyi (alman dili və ədəbiyyatı üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 479.9,
        dovlet_sifarisi_bali: 479.9,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126181',
        ad: 'Xarici dil müəllimliyi (ingilis dili üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 482.5,
        dovlet_sifarisi_bali: 551.4,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126327',
        ad: 'Beynəlxalq münasibətlər (tədris ingilis dilində)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 425.8,
        dovlet_sifarisi_bali: 488.1,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126335',
        ad: 'Filologiya (ingilis dili və ədəbiyyatı üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 497.6,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126343',
        ad: 'Filologiya (alman dili və ədəbiyyatı üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 408.7,
        dovlet_sifarisi_bali: 511.8,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126765',
        ad: 'Tərcümə (ingilis dili üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 487.7,
        dovlet_sifarisi_bali: 487.7,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126773',
        ad: 'Tərcümə (alman dili üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 489.4,
        dovlet_sifarisi_bali: 489.4,
        qrup: 3,
        alt_qrup: 'DT'
    },
    {
        kod: '126781',
        ad: 'Tərcümə (fransız dili üzrə)',
        universitet: 'Azərbaycan Dillər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 389.6,
        dovlet_sifarisi_bali: 492.5,
        qrup: 3,
        alt_qrup: 'DT'
    },

    // ==================== IV QRUP - BAKI DÖVLƏT UNİVERSİTETİ ====================
    {
        kod: '112484',
        ad: 'Biologiya müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 433.9,
        dovlet_sifarisi_bali: 433.9,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112516',
        ad: 'Kimya müəllimliyi',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 454.4,
        dovlet_sifarisi_bali: 454.4,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112532',
        ad: 'Psixologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 540.7,
        dovlet_sifarisi_bali: 540.7,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112565',
        ad: 'Psixologiya (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 581.5,
        dovlet_sifarisi_bali: 581.5,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112573',
        ad: 'Biologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 493.5,
        dovlet_sifarisi_bali: 493.5,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112598',
        ad: 'Biologiya (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 542.2,
        dovlet_sifarisi_bali: 542.2,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112613',
        ad: 'Biotexnologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 562.3,
        dovlet_sifarisi_bali: 562.3,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112638',
        ad: 'Biotexnologiya (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 586.8,
        dovlet_sifarisi_bali: 586.8,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112646',
        ad: 'Ekologiya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 349.9,
        dovlet_sifarisi_bali: 349.9,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112679',
        ad: 'Kimya',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 482.6,
        dovlet_sifarisi_bali: 482.6,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '112695',
        ad: 'Kimya (tədris ingilis dilində)',
        universitet: 'Bakı Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 548.1,
        dovlet_sifarisi_bali: 548.1,
        qrup: 4,
        alt_qrup: 'RK'
    },

    // ==================== IV QRUP - AZƏRBAYCAN TİBB UNİVERSİTETİ ====================
    {
        kod: '121126',
        ad: 'Əczaçılıq',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 580.6,
        dovlet_sifarisi_bali: 580.6,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '121142',
        ad: 'Fizioterapiya',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 603.4,
        dovlet_sifarisi_bali: 603.4,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '121175',
        ad: 'İctimai səhiyyə',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 593,
        dovlet_sifarisi_bali: 593,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '121191',
        ad: 'Tibb bacısı (qardaşı) işi',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 547.8,
        dovlet_sifarisi_bali: 547.8,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '121289',
        ad: 'Stomatologiya',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 615.5,
        dovlet_sifarisi_bali: 615.5,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '121312',
        ad: 'Tibb',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 624.3,
        dovlet_sifarisi_bali: 624.3,
        qrup: 4,
        alt_qrup: 'RK'
    },
    {
        kod: '121337',
        ad: 'Tibb (tədris ingilis dilində)',
        universitet: 'Azərbaycan Tibb Universiteti',
        teq_for: 'Ə',
        kecid_bali: 683.7,
        dovlet_sifarisi_bali: 683.7,
        qrup: 4,
        alt_qrup: 'RK'
    },

    // ==================== V QRUP - AZƏRBAYCAN İDMAN AKADEMİYASI ====================
    {
        kod: '137157',
        ad: 'Fiziki tərbiyə və çağırışaqədərki hazırlıq müəllimliyi',
        universitet: 'Azərbaycan İdman Akademiyası',
        teq_for: 'Ə',
        kecid_bali: 145.5,
        dovlet_sifarisi_bali: 171.6,
        qrup: 5,
        alt_qrup: 'Ümumi'
    },
    {
        kod: '137165',
        ad: 'Adaptiv bədən tərbiyəsi',
        universitet: 'Azərbaycan İdman Akademiyası',
        teq_for: 'Ə',
        kecid_bali: 139.5,
        dovlet_sifarisi_bali: 162.1,
        qrup: 5,
        alt_qrup: 'Ümumi'
    },
    {
        kod: '137173',
        ad: 'Kütləvi-sağlamlaşdırıcı idman',
        universitet: 'Azərbaycan İdman Akademiyası',
        teq_for: 'Ə',
        kecid_bali: 135.7,
        dovlet_sifarisi_bali: 155.5,
        qrup: 5,
        alt_qrup: 'Ümumi'
    },
    {
        kod: '137198',
        ad: 'Ümumi fiziki hazırlıq',
        universitet: 'Azərbaycan İdman Akademiyası',
        teq_for: 'Ə',
        kecid_bali: 130.9,
        dovlet_sifarisi_bali: 155.5,
        qrup: 5,
        alt_qrup: 'Ümumi'
    },

    // ==================== V QRUP - BAKI MUSİQİ AKADEMİYASI ====================
    {
        kod: '132118',
        ad: 'Musiqi müəllimliyi (fortepiano, violin, viola və s.)',
        universitet: 'Bakı Musiqi Akademiyası',
        teq_for: 'Ə',
        kecid_bali: 123.1,
        dovlet_sifarisi_bali: 123.1,
        qrup: 5,
        alt_qrup: 'Xüsusi qabiliyyət'
    },

    // ==================== V QRUP - AZƏRBAYCAN MİLLİ KONSERVATORİYASI ====================
    {
        kod: '133114',
        ad: 'Musiqi müəllimliyi (fortepiano, tar, kamança və s.)',
        universitet: 'Azərbaycan Milli Konservatoriyası',
        teq_for: 'Ə',
        kecid_bali: 120.3,
        dovlet_sifarisi_bali: 120.3,
        qrup: 5,
        alt_qrup: 'Xüsusi qabiliyyət'
    },

    // ==================== ƏLAVƏ UNİVERSİTETLƏR ====================
    // Gəncə, Sumqayıt, Mingəçevir, Lənkəran və s.
    
    {
        kod: '145119',
        ad: 'Fizika müəllimliyi',
        universitet: 'Gəncə Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 370.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '145127',
        ad: 'İnformatika (rəqəmsal bacarıqlar) müəllimliyi',
        universitet: 'Gəncə Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 312.3,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '145135',
        ad: 'Riyaziyyat müəllimliyi',
        universitet: 'Gəncə Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 299.7,
        dovlet_sifarisi_bali: 486,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '145168',
        ad: 'Kompüter elmləri',
        universitet: 'Gəncə Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 272.6,
        dovlet_sifarisi_bali: 272.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    
    {
        kod: '148116',
        ad: 'Fizika müəllimliyi',
        universitet: 'Sumqayıt Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 390,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '148132',
        ad: 'Riyaziyyat müəllimliyi',
        universitet: 'Sumqayıt Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 312.5,
        dovlet_sifarisi_bali: 484.1,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '148221',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Sumqayıt Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 298.1,
        dovlet_sifarisi_bali: 298.1,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    
    {
        kod: '149112',
        ad: 'Fizika müəllimliyi',
        universitet: 'Mingəçevir Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 368.3,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '149137',
        ad: 'Riyaziyyat müəllimliyi',
        universitet: 'Mingəçevir Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 271.5,
        dovlet_sifarisi_bali: 486.9,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '149161',
        ad: 'Kompüter elmləri',
        universitet: 'Mingəçevir Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 250,
        dovlet_sifarisi_bali: 255.3,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    
    {
        kod: '151112',
        ad: 'Fizika müəllimliyi',
        universitet: 'Lənkəran Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 398.8,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '151129',
        ad: 'Riyaziyyat müəllimliyi',
        universitet: 'Lənkəran Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 493.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '151161',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Lənkəran Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 224.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },

    // Naxçıvan
    {
        kod: '142113',
        ad: 'Fizika müəllimliyi',
        universitet: 'Naxçıvan Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 371.5,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '142121',
        ad: 'Riyaziyyat müəllimliyi',
        universitet: 'Naxçıvan Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 504.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '142219',
        ad: 'İnformasiya texnologiyaları',
        universitet: 'Naxçıvan Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 234.2,
        dovlet_sifarisi_bali: 234.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '142227',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Naxçıvan Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 422.6,
        dovlet_sifarisi_bali: 422.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '142235',
        ad: 'Kompüter mühəndisliyi',
        universitet: 'Naxçıvan Dövlət Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 227.6,
        qrup: 1,
        alt_qrup: 'Rİ'
    },

    // Xəzər Universiteti
    {
        kod: '158111',
        ad: 'Fizika müəllimliyi',
        universitet: 'Xəzər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 200,
        dovlet_sifarisi_bali: 373.6,
        qrup: 1,
        alt_qrup: 'RK'
    },
    {
        kod: '158136',
        ad: 'Kompüter elmləri (tədris ingilis dilində)',
        universitet: 'Xəzər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 427.2,
        dovlet_sifarisi_bali: 427.2,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '158152',
        ad: 'İnformasiya təhlükəsizliyi (tədris ingilis dilində)',
        universitet: 'Xəzər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 511.7,
        dovlet_sifarisi_bali: 511.7,
        qrup: 1,
        alt_qrup: 'Rİ'
    },
    {
        kod: '158185',
        ad: 'Kompüter mühəndisliyi (tədris ingilis dilində)',
        universitet: 'Xəzər Universiteti',
        teq_for: 'Ə',
        kecid_bali: 316.4,
        dovlet_sifarisi_bali: 316.4,
        qrup: 1,
        alt_qrup: 'Rİ'
    }

// ==================== DATA.JS SONU ====================
// Bu nöqtədən sonra heç nə əlavə etməyin!
];