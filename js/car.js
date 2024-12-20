function getCarDataById(id) {
  const cars = [
    {
      id: "c63s",
      headerImage: "./img/c63s_wal.jpg",
      carImage: "./img/c63s-1.jpg",
      car_title: "Mercedes-AMG C63s",
      car_text: `Mercedes-AMG C63s to luksusowy sedan o imponujących osiągach i wyjątkowej stylistyce. Wyposażony w 4.0-litrowy silnik V8 o mocy 476 KM i momencie obrotowym 650 Nm, zapewnia niezapomniane wrażenia z jazdy. Przyspieszenie od 0 do 100 km/h zajmuje jedynie 4,0 sekundy, a prędkość maksymalna wynosi 250 km/h. To idealne połączenie komfortu, technologii i sportowego charakteru.`,
      images: ["./img/c63s.jpg", "./img/c63s-1.jpg", "./img/c63s-2.jpg", "./img/c63s-3.jpg", "./img/c63s-4.jpg"],
      moc: "476 KM",
      zeroToHundred: "4.0 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na tylne koła (RWD)",
      silnik: "4.0 V8",
      liczbaDrzwi: "4",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Niezależne, adaptacyjne",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Active Brake Assist",
      wnętrze: "Skórzane wykończenie, system multimedialny MBUX",
      audio: "Burmester, 13 głośników",
      swiatla: "LED High Performance",
      wyglad_zewnetrzny: "Elegancki, sportowy z akcentami AMG",
      kola: "19-calowe, opony Pirelli",
      ceny: {
        "1dzien": "1200 zł / doba",
        "2_3dni": "1100 zł / doba",
        "4_6dni": "1000 zł / doba",
        "7_13dni": "950 zł / doba",
        "14_29dni": "900 zł / doba",
        miesiac: "850 zł / doba",
      },
    },
    {
      id: "rs3",
      headerImage: "./img/audirs3_wal.jpg",
      carImage: "./img/audirs3-2.jpg",
      car_title: "Audi RS3",
      car_text: `Audi RS3 to kompaktowy samochód sportowy o wyjątkowych osiągach i nowoczesnym designie. Wyposażony w 2.5-litrowy, pięciocylindrowy silnik o mocy 400 KM i momencie obrotowym 500 Nm, zapewnia przyspieszenie od 0 do 100 km/h w zaledwie 3,8 sekundy. Prędkość maksymalna wynosi 250 km/h, co czyni go idealnym wyborem dla miłośników dynamicznej jazdy. RS3 łączy sportowy charakter z wygodą i technologią, oferując niezrównane wrażenia za kierownicą.`,
      images: [
        "./img/audirs3.jpg",
        "./img/audirs3-1.jpg",
        "./img/audirs3-2.jpg",
        "./img/audirs3-3.jpg",
        "./img/audirs3-4.jpg",
        "./img/audirs3-5.jpg",
      ],
      moc: "400 KM",
      zeroToHundred: "3.8 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na wszystkie koła (quattro)",
      silnik: "2.5 R5",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Niezależne, sportowe",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Audi Pre Sense",
      wnętrze: "Skórzane sportowe fotele, system multimedialny MMI",
      audio: "Bang & Olufsen, 14 głośników",
      swiatla: "Matrix LED",
      wyglad_zewnetrzny: "Sportowy, aerodynamiczny z pakietem RS",
      kola: "20-calowe, opony Michelin Pilot Sport",
      ceny: {
        "1dzien": "1000 zł / doba",
        "2_3dni": "900 zł / doba",
        "4_6dni": "850 zł / doba",
        "7_13dni": "800 zł / doba",
        "14_29dni": "750 zł / doba",
        miesiac: "700 zł / doba",
      },
    },
    {
      id: "m340ix",
      headerImage: "./img/bmwm340i_wal.jpg",
      carImage: "./img/bmwm340i.jpg",
      car_title: "BMW M340i xDrive Touring",
      car_text: `BMW M340i xDrive Touring to doskonałe połączenie dynamiki, przestronności i komfortu. Wyposażony w 3.0-litrowy silnik R6 o mocy 374 KM i momencie obrotowym 500 Nm, zapewnia niezrównaną radość z jazdy. Przyspieszenie od 0 do 100 km/h zajmuje jedynie 4,5 sekundy, a prędkość maksymalna wynosi 250 km/h. Ten wszechstronny model oferuje luksusowe wnętrze, zaawansowane technologie oraz sportowy charakter, co czyni go idealnym wyborem zarówno na codzienne przejazdy, jak i dłuższe podróże.`,
      images: ["./img/bmwm340i.jpg", "./img/bmwm340i-1.jpg", "./img/bmwm340i-2.jpg", "./img/bmwm340i-3.jpg", "./img/bmwm340i-4.jpg"],
      moc: "374 KM",
      zeroToHundred: "4.5 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na wszystkie koła (xDrive)",
      silnik: "3.0 R6",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Adaptacyjne M",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Active Cruise Control",
      wnętrze: "Skórzane wykończenie, system multimedialny iDrive",
      audio: "Harman Kardon, 16 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Elegancki, sportowy z pakietem M",
      kola: "19-calowe, opony sportowe",
      ceny: {
        "1dzien": "800 zł / doba",
        "2_3dni": "750 zł / doba",
        "4_6dni": "700 zł / doba",
        "7_13dni": "650 zł / doba",
        "14_29dni": "600 zł / doba",
        miesiac: "550 zł / doba",
      },
    },
    {
      id: "cupra-vz5",
      headerImage: "./img/cupra_wal.jpg",
      carImage: "./img/cupra-6.jpg",
      car_title: "Cupra Formentor VZ5",
      car_text: `Cupra Formentor VZ5 to wyjątkowy SUV, który łączy sportowy charakter z nowoczesnym designem. Wyposażony w 2.5-litrowy silnik R5 o mocy 390 KM i momencie obrotowym 480 Nm, oferuje niepowtarzalne wrażenia z jazdy.
      Przyspieszenie od 0 do 100 km/h zajmuje zaledwie 4,2 sekundy, a prędkość maksymalna wynosi 250 km/h. To idealny wybór dla kierowców, którzy cenią sobie osiągi, styl i nowoczesne technologie.
      Wnętrze Cupra Formentor VZ5 zachwyca luksusowym wykończeniem, zaawansowanym systemem multimedialnym oraz funkcjonalnością. Z zewnątrz auto wyróżnia się dynamiczną sylwetką, agresywnymi akcentami stylistycznymi i charakterystycznym wyglądem, który przyciąga spojrzenia.`,
      images: [
        "./img/cupra.jpg",
        "./img/cupra-1.jpg",
        "./img/cupra-2.jpg",
        "./img/cupra-3.jpg",
        "./img/cupra-4.jpg",
        "./img/cupra-5.jpg",
        "./img/cupra-6.jpg",
      ],
      moc: "390 KM",
      zeroToHundred: "4.2 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na wszystkie koła (AWD)",
      silnik: "2.5 R5",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Adaptacyjne z trybem sportowym",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Lane Assist, Adaptive Cruise Control",
      wnętrze: "Skórzane fotele, ambientowe oświetlenie, system multimedialny z ekranem 12”",
      audio: "Beats Audio, 10 głośników",
      swiatla: "LED, matrycowe",
      wyglad_zewnetrzny: "Sportowy, dynamiczny z unikalnymi akcentami Cupra",
      kola: "20-calowe, opony Pirelli",
      ceny: {
        "1dzien": "1000 zł / doba",
        "2_3dni": "950 zł / doba",
        "4_6dni": "900 zł / doba",
        "7_13dni": "850 zł / doba",
        "14_29dni": "800 zł / doba",
        miesiac: "750 zł / doba",
      },
    },
    {
      id: "audi-rs6",
      headerImage: "./img/audirs6_wal.jpg",
      carImage: "./img/audirs6.jpg",
      car_title: "Audi RS6 Avant",
      car_text: `Audi RS6 Avant to wyjątkowa wersja sportowego kombi, które łączy osiągi, przestronność i luksus. Wyposażone w 4.0-litrowy silnik V8 o mocy 630 KM i momencie obrotowym 850 Nm, oferuje niezrównaną dynamikę. Przyspieszenie od 0 do 100 km/h zajmuje jedynie 3,4 sekundy, a prędkość maksymalna wynosi 280 km/h. 
      RS6 Avant to połączenie wyjątkowych osiągów z przestronnością typową dla kombi, co czyni go idealnym wyborem dla osób szukających kompromisu między rodziną a pasją do sportowej jazdy. 
      Wnętrze pojazdu wyróżnia się luksusowym wykończeniem, nowoczesnym systemem multimedialnym oraz komfortowymi siedzeniami, a z zewnątrz auto zachwyca agresywnymi liniami nadwozia oraz typowymi dla RS akcentami.`,
      images: [
        "./img/audirs6.jpg",
        "./img/audirs6-1.jpg",
        "./img/audirs6-2.jpg",
        "./img/audirs6-3.jpg",
        "./img/audirs6-4.jpg",
        "./img/audirs6-5.jpg",
      ],
      moc: "630 KM",
      zeroToHundred: "3.4 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na wszystkie koła (AWD)",
      silnik: "4.0 V8",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Sportowe RS, adaptacyjne",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Lane Assist, Adaptive Cruise Control, Audi Pre-Sense",
      wnętrze: "Skórzane fotele RS, system multimedialny MMI touch, zestaw multimedialny Bang & Olufsen",
      audio: "Bang & Olufsen, 16 głośników",
      swiatla: "Matrix LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy, agresywny z pakietem RS",
      kola: "21-calowe, opony Michelin",
      ceny: {
        "1dzien": "1400 zł / doba",
        "2_3dni": "1300 zł / doba",
        "4_6dni": "1200 zł / doba",
        "7_13dni": "1100 zł / doba",
        "14_29dni": "1000 zł / doba",
        miesiac: "950 zł / doba",
      },
    },
    {
      id: "audi-rsq3",
      headerImage: "./img/audirsq3_wal.jpg",
      carImage: "./img/audirsq3.jpg",
      car_title: "Audi RS Q3",
      car_text: `Audi RS Q3 to sportowy SUV, który łączy moc, przestronność i nowoczesne technologie. Wyposażony w 2.5-litrowy silnik R5 o mocy 400 KM i momencie obrotowym 480 Nm, zapewnia dynamiczną jazdę zarówno w mieście, jak i poza nim. Przyspieszenie od 0 do 100 km/h wynosi jedynie 4,5 sekundy, a prędkość maksymalna to 250 km/h. 
      RS Q3 to idealny wybór dla osób, które szukają sportowych osiągów w SUV-ie, bez kompromisów w kwestii przestronności i komfortu. Agresywny wygląd nadwozia, sportowe akcenty oraz najnowsze technologie we wnętrzu czynią ten model jednym z najatrakcyjniejszych w swojej klasie.`,
      images: [
        "./img/audirsq3.jpg",
        "./img/audirsq3-1.jpg",
        "./img/audirsq3-2.jpg",
        "./img/audirsq3-3.jpg",
        "./img/audirsq3-4.jpg",
        "./img/audirsq3-5.jpg",
      ],
      moc: "400 KM",
      zeroToHundred: "4.5 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na wszystkie koła (AWD)",
      silnik: "2.5 R5",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Sportowe, adaptacyjne",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Audi Pre-Sense, Lane Assist",
      wnętrze: "Skórzane fotele RS, system multimedialny MMI",
      audio: "Bang & Olufsen, 14 głośników",
      swiatla: "Matrix LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy SUV z akcentami RS",
      kola: "20-calowe, opony Pirelli",
      ceny: {
        "1dzien": "900 zł / doba",
        "2_3dni": "850 zł / doba",
        "4_6dni": "800 zł / doba",
        "7_13dni": "750 zł / doba",
        "14_29dni": "700 zł / doba",
        miesiac: "650 zł / doba",
      },
    },
    {
      id: "megane-rs",
      headerImage: "./img/meganers_wal.jpg",
      carImage: "./img/meganers.jpg",
      car_title: "Renault Mégane RS",
      car_text: `Renault Mégane RS to sportowy hatchback, który łączy dynamiczną jazdę z codzienną użytecznością. Wyposażony w 1.8-litrowy silnik R4 o mocy 300 KM i momencie obrotowym 400 Nm, oferuje niezrównaną frajdę z jazdy. Przyspieszenie od 0 do 100 km/h wynosi 5,7 sekundy, a prędkość maksymalna to 260 km/h.
      Z agresywnym wyglądem nadwozia, precyzyjnym układem jezdnym oraz technologiami z wyższej półki, Renault Mégane RS jest idealnym wyborem dla miłośników sportowych osiągów i motoryzacyjnego charakteru. To samochód, który sprawdzi się zarówno na torze, jak i na codziennych trasach.`,
      images: [
        "./img/meganers.jpg",
        "./img/meganers-1.jpg",
        "./img/meganers-2.jpg",
        "./img/meganers-3.jpg",
        "./img/meganers-4.jpg",
        "./img/meganers-5.jpg",
      ],
      moc: "300 KM",
      zeroToHundred: "5.7 sekundy",
      skrzynia: "Manualna / Automatyczna",
      napęd: "Napęd na przednią oś (FWD)",
      silnik: "1.8 R4",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Sportowe, z regulacją twardości",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, System kontroli trakcji",
      wnętrze: "Skórzane fotele, system multimedialny R-Link",
      audio: "Bose, 9 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy hatchback z pakietem RS",
      kola: "18-calowe, opony Michelin",
      ceny: {
        "1dzien": "400 zł / doba",
        "2_3dni": "350 zł / doba",
        "4_6dni": "320 zł / doba",
        "7_13dni": "300 zł / doba",
        "14_29dni": "270 zł / doba",
        miesiac: "250 zł / doba",
      },
    },

    {
      id: "huracan-evo",
      headerImage: "./img/lambo_wal.jpg",
      carImage: "./img/lambo.jpg",
      car_title: "Lamborghini Huracán Evo",
      car_text: `Lamborghini Huracán Evo to samochód, który łączy niesamowitą moc z precyzyjnym wykonaniem i luksusową elegancją. Wyposażony w 5.2-litrowy silnik V10 o mocy 640 KM i momencie obrotowym 565 Nm, zapewnia niewiarygodną przyjemność z jazdy. Przyspieszenie od 0 do 100 km/h wynosi zaledwie 2,9 sekundy, a maksymalna prędkość to 325 km/h.
      Dzięki doskonałej aerodynamice, dynamicznym właściwościom jezdnym oraz charakterystycznemu, agresywnemu wyglądowi, Huracán Evo to jeden z najpotężniejszych supersamochodów na rynku, idealny zarówno na tor, jak i do codziennej ekskluzywnej jazdy.`,
      images: ["./img/lambo.jpg", "./img/lambo-1.jpg", "./img/lambo-2.jpg", "./img/lambo-3.jpg", "./img/lambo-4.jpg", "./img/lambo-5.jpg"],
      moc: "640 KM",
      zeroToHundred: "2.9 sekundy",
      skrzynia: "Automatyczna (DCT)",
      napęd: "Napęd na cztery koła (AWD)",
      silnik: "5.2 V10",
      liczbaDrzwi: "2",
      liczbaMiejsc: "2",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Niezależne, adaptacyjne",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Traction Control",
      wnętrze: "Skórzane fotele, system multimedialny Lamborghini Infotainment",
      audio: "Bose, 8 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Agresywny, sportowy design z pakietem aero",
      kola: "20-calowe, opony Pirelli",
      ceny: {
        "1dzien": "2500 zł / doba",
        "2_3dni": "2300 zł / doba",
        "4_6dni": "2100 zł / doba",
        "7_13dni": "1900 zł / doba",
        "14_29dni": "1700 zł / doba",
        miesiac: "1500 zł / doba",
      },
    },
    {
      id: "golf-7r",
      headerImage: "./img/golf7r_wal.jpg",
      carImage: "./img/golf7r.jpg",
      car_title: "Volkswagen Golf 7R",
      car_text: `Volkswagen Golf 7R to sportowa wersja popularnego hatchbacka, która oferuje imponującą moc i wyjątkową dynamikę. Wyposażony w 2.0-litrowy silnik R4 o mocy 300 KM i momencie obrotowym 380 Nm, Golf 7R zapewnia wyjątkowe osiągi i radość z jazdy. Przyspieszenie od 0 do 100 km/h zajmuje tylko 4,8 sekundy, a prędkość maksymalna wynosi 250 km/h.
      Dzięki napędowi na cztery koła (4Motion) oraz precyzyjnemu zawieszeniu, Golf 7R oferuje niesamowitą stabilność i kontrolę zarówno na drodze, jak i w trudniejszych warunkach. To idealny samochód dla tych, którzy cenią sportowy charakter, ale nie rezygnują z komfortu i codziennej użyteczności.`,
      images: ["./img/golf7r.jpg", "./img/golf7r-1.jpg", "./img/golf7r-2.jpg", "./img/golf7r-3.jpg", "./img/golf7r-4.jpg", "./img/golf7r-5.jpg"],
      moc: "300 KM",
      zeroToHundred: "4.8 sekundy",
      skrzynia: "Automatyczna DSG",
      napęd: "Napęd na cztery koła (4Motion)",
      silnik: "2.0 R4",
      liczbaDrzwi: "5",
      liczbaMiejsc: "5",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Adaptacyjne, sportowe",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Park Assist",
      wnętrze: "Skórzane fotele, system multimedialny Discover Pro",
      audio: "Dynaudio, 10 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy, z akcentami R",
      kola: "19-calowe, opony Michelin",
      ceny: {
        "1dzien": "500 zł / doba",
        "2_3dni": "450 zł / doba",
        "4_6dni": "400 zł / doba",
        "7_13dni": "350 zł / doba",
        "14_29dni": "300 zł / doba",
        miesiac: "250 zł / doba",
      },
    },
    {
      id: "bmw-m2-competition",
      headerImage: "./img/bmwm2_wal.jpg",
      carImage: "./img/bmwm2.jpg",
      car_title: "BMW M2 Competition",
      car_text: `BMW M2 Competition to prawdziwa maszyna stworzona z myślą o pasjonatach sportowej jazdy. Wyposażony w 3.0-litrowy silnik R6 o mocy 410 KM i momencie obrotowym 550 Nm, oferuje niezrównaną dynamikę i precyzyjne prowadzenie. Przyspieszenie od 0 do 100 km/h zajmuje zaledwie 4,4 sekundy, a prędkość maksymalna wynosi 250 km/h.
      Dzięki napędowi na tylne koła (RWD) oraz zoptymalizowanemu zawieszeniu, M2 Competition zapewnia niezapomniane wrażenia z jazdy, które są zarówno ekscytujące, jak i precyzyjnie kontrolowane. Idealny wybór dla tych, którzy szukają sportowego samochodu, który łączy moc, technologię i styl.`,
      images: ["./img/bmwm2.jpg", "./img/bmwm2-1.jpg", "./img/bmwm2-2.jpg", "./img/bmwm2-3.jpg", "./img/bmwm2-4.jpg", "./img/bmwm2-5.jpg"],
      moc: "410 KM",
      zeroToHundred: "4.4 sekundy",
      skrzynia: "Automatyczna, 7-biegowa DCT",
      napęd: "Napęd na tylne koła (RWD)",
      silnik: "3.0 R6",
      liczbaDrzwi: "2",
      liczbaMiejsc: "4",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Adaptacyjne M",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Park Assist",
      wnętrze: "Skórzane wykończenie, system multimedialny iDrive",
      audio: "Harman Kardon, 12 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy, agresywny design M",
      kola: "19-calowe, opony Michelin",
      ceny: {
        "1dzien": "900 zł / doba",
        "2_3dni": "850 zł / doba",
        "4_6dni": "800 zł / doba",
        "7_13dni": "750 zł / doba",
        "14_29dni": "700 zł / doba",
        miesiac: "650 zł / doba",
      },
    },
    {
      id: "ferrari-f12-berlinetta",
      headerImage: "./img/f12_wal.jpg",
      carImage: "./img/ferrari.jpg",
      car_title: "Ferrari F12 Berlinetta",
      car_text: `Ferrari F12 Berlinetta to perfekcyjnie zaprojektowane gran turismo, które oferuje niezrównaną moc i elegancję. Wyposażone w potężny silnik 6.3 V12 o mocy 740 KM i momencie obrotowym 690 Nm, F12 Berlinetta zapewnia fenomenalne osiągi, które pozwalają na przyspieszenie od 0 do 100 km/h w zaledwie 3,1 sekundy. Prędkość maksymalna wynosi 340 km/h, co czyni ten samochód jednym z najszybszych na rynku.
      Jego aerodynamiczny design oraz precyzyjne prowadzenie na torze i na drodze sprawiają, że jest to samochód dla prawdziwych pasjonatów motoryzacji. F12 Berlinetta to idealne połączenie luksusu, wydajności i sportowego charakteru.`,
      images: [
        "./img/ferrari.jpg",
        "./img/ferrari-1.jpg",
        "./img/ferrari-2.jpg",
        "./img/ferrari-3.jpg",
        "./img/ferrari-4.jpg",
        "./img/ferrari-5.jpg",
      ],
      moc: "740 KM",
      zeroToHundred: "3.1 sekundy",
      skrzynia: "Automatyczna, 7-biegowa DCT",
      napęd: "Napęd na tylne koła (RWD)",
      silnik: "6.3 V12",
      liczbaDrzwi: "2",
      liczbaMiejsc: "2",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Niezależne, sportowe",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag, Carbon Ceramic Brakes",
      wnętrze: "Skórzane wykończenie, system multimedialny Ferrari",
      audio: "Bowers & Wilkins, 12 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy, elegancki z akcentami Ferrari",
      kola: "20-calowe, opony Pirelli",
      ceny: {
        "1dzien": "2500 zł / doba",
        "2_3dni": "2300 zł / doba",
        "4_6dni": "2100 zł / doba",
        "7_13dni": "2000 zł / doba",
        "14_29dni": "1800 zł / doba",
        miesiac: "1700 zł / doba",
      },
    },
    {
      id: "amg-gtr",
      headerImage: "./img/amggtr_wal.jpg",
      carImage: "./img/amggtr.jpg",
      car_title: "Mercedes AMG GTR",
      car_text: `AMG GTR to wyjątkowy samochód sportowy, który łączy niesamowite osiągi z eleganckim designem. Wyposażony w 4.0-litrowy silnik V8 o
      mocy 585 KM, zapewnia niezwykle dynamiczną jazdę i precyzyjne prowadzenie. Jego agresywna sylwetka, szerokie nadkola i aerodynamika,
      sprawiają, że GTR przyciąga uwagę na drodze. Wypożyczenie tego modelu to idealna okazja, by poczuć się jak prawdziwy kierowca
      wyścigowy, ciesząc się mocą i komfortem najwyższej klasy. Idealny wybór dla tych, którzy szukają emocji i luksusu w jednym.`,
      images: ["./img/amggtr-1.jpg", "./img/amggtr-2.jpg", "./img/amggtr-3.jpg", "./img/amggtr-4.jpg", "./img/amggtr-5.jpg"],
      moc: "585 KM",
      zeroToHundred: "3.6 sekundy",
      skrzynia: "Automatyczna",
      napęd: "Napęd na tylną oś (RWD)",
      silnik: "V8 4.0 biturbo",
      liczbaDrzwi: "3",
      liczbaMiejsc: "2",
      rodzajPaliwa: "Benzyna",
      zawieszenie: "Niezależne z przodu i z tyłu",
      systemy_bezpieczenstwa: "ABS, ESP, Airbag",
      wnętrze: "Skórzane fotele, system klimatyzacji",
      audio: "Bose, 12 głośników",
      swiatla: "LED, adaptacyjne",
      wyglad_zewnetrzny: "Sportowy, aerodynamiczny",
      kola: "20-calowe, opony Michelin",
      ceny: {
        "1dzien": "1000 zł / doba",
        "2_3dni": "900 zł / doba",
        "4_6dni": "850 zł / doba",
        "7_13dni": "800 zł / doba",
        "14_29dni": "750 zł / doba",
        miesiac: "700 zł / doba",
      },
    },
  ];

  return cars.find((car) => car.id === id);
}
