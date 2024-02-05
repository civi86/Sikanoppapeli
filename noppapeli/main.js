document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".menu");
    const menu = document.getElementById("menu");
    const saantosivu = document.getElementById("saantoruutu");
    const otsikko = document.getElementById("otsikko");
    const nuoli = document.getElementById("nuoli");
    const nuoli2 = document.getElementById("nuoli2");

    const side1 = document.getElementById("side1");
    const side2 = document.getElementById("side2");
    const side3 = document.getElementById("side3");
    const side4 = document.getElementById("side4");
    const side5 = document.getElementById("side5");
    const side6 = document.getElementById("side6");

    const side11 = document.getElementById("side11");
    const side12 = document.getElementById("side12");
    const side13 = document.getElementById("side13");
    const side14 = document.getElementById("side14");
    const side15 = document.getElementById("side15");
    const side16 = document.getElementById("side16");

    const panel2 = document.getElementById("panel2");
    const tavoite = document.getElementById("tavoite");

    const pelaaja1Input = document.getElementById("pelaaja1");
    const pelaaja2Input = document.getElementById("pelaaja2");
    const pelaaja3Input = document.getElementById("pelaaja3");
    const pelaaja4Input = document.getElementById("pelaaja4");
    const maksimiPisteet = document.getElementById("pelaaja5");
    const submitInput = document.getElementById("submit");
    const saannotInput = document.getElementById("saannot");
    const takaisinInput = document.getElementById("takaisin");

    const noppaCheck2 = document.getElementById("noppacheck2");

    const pelaaja1Nappi = document.getElementById("btn1");
    const pelaaja2Nappi = document.getElementById("btn2");
    const pelaaja3Nappi = document.getElementById("btn3");
    const pelaaja4Nappi = document.getElementById("btn4");
    const submitNappi = document.getElementById("btn6");
    const saantoNappi = document.getElementById("btn7");

    const heita = document.getElementById("btn8");
    const vuoronLopetusNappi = document.getElementById("btn9");
    const heitaTeksti = document.getElementById("heitateksti");
    const lopetaTeksti = document.getElementById("lopetateksti");

    const informaatio = document.getElementById("informaatio");
    const tuplatText = document.getElementById("tuplat");

    let pelaaja1Teksti = document.getElementById("pelaaja1pisteet");
    let pelaaja2Teksti = document.getElementById("pelaaja2pisteet");
    let pelaaja3Teksti = document.getElementById("pelaaja3pisteet");
    let pelaaja4Teksti = document.getElementById("pelaaja4pisteet");

    let voittoRuutuText = document.getElementById("voittoteksti");
    let voittoruutu = document.getElementById("voittoruutu");

    let valiSummaDisplay = document.getElementById("valisumma");
    let valiSummaDisplay2 = document.getElementById("valisumma2");

    let pelaaja1 = "";
    let pelaaja2 = "";
    let pelaaja3 = "";
    let pelaaja4 = "";
    let pelaajat = [];
    let voittaja = "blank";

    let tuplat = false;

    let noppa2C = noppaCheck2.checked;

    let tuplaLaskuri = 0;

    if(screen.width < 768){
        menu.style.display = "none";
        informaatio.style.display = "block";
    }

    if(screen.width > 768){
        menu.style.display = "block";
        informaatio.style.display = "none";
    }

    function submitClick(event) {
        event.preventDefault();
        form.style.display = "none";
        const panel = document.getElementById("panel");
        const peliruutu = document.getElementById("peliruutu");
        const arpakuutio = document.getElementById("dice");
        panel.style.display = "block";
        peliruutu.style.display = "block";
        arpakuutio.style.display = "block";

        pelaaja1 = pelaaja1Input.value;
        pelaaja2 = pelaaja2Input.value;
        pelaaja3 = pelaaja3Input.value;
        pelaaja4 = pelaaja4Input.value;

        tavoite.innerHTML = `Tavoite ${maksimiPisteet.value} pistettä`;

        noppa2C = noppaCheck2.checked;
        const arpakuutio2 = document.getElementById("dice2");
        if(noppa2C){
            arpakuutio2.style.display = "block";
        }

        let kaikki = [pelaaja1, pelaaja2, pelaaja3, pelaaja4];

        for(i in kaikki){
            if(kaikki[i] != ""){
                pelaajat.push(kaikki[i]);
            }
        }
        valiSummaDisplay.innerHTML = `${pelaajat[0]}:n vuoro`;
        screenUpdate();
    }
    let pelaaja1Score = 0;
    let pelaaja2Score = 0;
    let pelaaja3Score = 0;
    let pelaaja4Score = 0;
    let lukuIndex = 0;
    let lukuIndex2 = 0;

    function luvunArvonta(){
        lukuIndex += 1;
        if(lukuIndex > 5){
            lukuIndex = 0;
        }
    }
    function luvunArvonta2(){
        lukuIndex2 += 1;
        if(lukuIndex2> 5){
            lukuIndex2 = 0;
        }
    }
    function screenUpdate(){
        if(pelaaja1Score != 0){
            pelaaja1Teksti.innerHTML = pelaaja1 + " " + pelaaja1Score
        }
        if(pelaaja2Score != 0){
            pelaaja2Teksti.innerHTML = pelaaja2 + " " + pelaaja2Score
        }
        if(pelaaja3Score != 0){
            pelaaja3Teksti.innerHTML = pelaaja3 + " " + pelaaja3Score
        }
        if(pelaaja4Score != 0){
            pelaaja4Teksti.innerHTML = pelaaja4 + " " + pelaaja4Score
        }
    };

    setInterval(luvunArvonta, 10.223);

    function noppa() {
        const noppaLista = [1, 2, 3, 4, 5, 6];
        const luku = noppaLista[lukuIndex];
        return luku
    }
    setInterval(luvunArvonta2, 13.426);

    function noppa2() {
        const noppaLista2 = [1, 2, 3, 4, 5, 6];
        const luku2 = noppaLista2[lukuIndex2];
        return luku2
    }

    let pelaajaVuoro = 0;
    let pelaajaVuoro2 = 1;
    let valiSumma = 0;

    let noppaTesti = noppa();
    let noppaTesti2 = noppa2();
    let fail = false;

    tuplat = false;
    let ykköstuplat = false;
    tuplatText.style.display = "none";

    function heitaClick() {

        noppaTesti = noppa();
        noppaTesti2 = noppa2();
    
        tuplat = false;

        if(noppaTesti == noppaTesti2){
            valiSumma += noppaTesti*2;
            if(noppaTesti2 == 1){
                valiSumma += 21;
                ykköstuplat = true;
            }
            if(noppa2C){
                tuplat = true;
        }
        }
        tuplatText.style.display = "none";
        if(tuplat){
            tuplaLaskuri += 1;
            tuplatText.style.display = "block";
            tuplatText.innerHTML = "Tuplat!";
        }
        if(tuplat == false){
            tuplaLaskuri = 0;
        }

        if(noppaTesti == 1){
            side1.style.display = "block";
            side2.style.display = "none";
            side3.style.display = "none";
            side4.style.display = "none";
            side5.style.display = "none";
            side6.style.display = "none";
            fail = true;
        }
        if(noppaTesti == 2){
            side1.style.display = "none";
            side2.style.display = "block";
            side3.style.display = "none";
            side4.style.display = "none";
            side5.style.display = "none";
            side6.style.display = "none";
        }
        if(noppaTesti == 3){
            side1.style.display = "none";
            side2.style.display = "none";
            side3.style.display = "block";
            side4.style.display = "none";
            side5.style.display = "none";
            side6.style.display = "none";
        }
        if(noppaTesti == 4){
            side1.style.display = "none";
            side2.style.display = "none";
            side3.style.display = "none";
            side4.style.display = "block";
            side5.style.display = "none";
            side6.style.display = "none";
        }
        if(noppaTesti == 5){
            side1.style.display = "none";
            side2.style.display = "none";
            side3.style.display = "none";
            side4.style.display = "none";
            side5.style.display = "block";
            side6.style.display = "none";
        }
        if(noppaTesti == 6){
            side1.style.display = "none";
            side2.style.display = "none";
            side3.style.display = "none";
            side4.style.display = "none";
            side5.style.display = "none";
            side6.style.display = "block";
        }
        if(noppa2C){
            if(noppaTesti2 == 1){
                side11.style.display = "block";
                side12.style.display = "none";
                side13.style.display = "none";
                side14.style.display = "none";
                side15.style.display = "none";
                side16.style.display = "none";
                fail = true;
            }
            if(noppaTesti2 == 2){
                side11.style.display = "none";
                side12.style.display = "block";
                side13.style.display = "none";
                side14.style.display = "none";
                side15.style.display = "none";
                side16.style.display = "none";
            }
            if(noppaTesti2 == 3){
                side11.style.display = "none";
                side12.style.display = "none";
                side13.style.display = "block";
                side14.style.display = "none";
                side15.style.display = "none";
                side16.style.display = "none";
            }
            if(noppaTesti2 == 4){
                side11.style.display = "none";
                side12.style.display = "none";
                side13.style.display = "none";
                side14.style.display = "block";
                side15.style.display = "none";
                side16.style.display = "none";
            }
            if(noppaTesti2 == 5){
                side11.style.display = "none";
                side12.style.display = "none";
                side13.style.display = "none";
                side14.style.display = "none";
                side15.style.display = "block";
                side16.style.display = "none";
            }
            if(noppaTesti2 == 6){
                side11.style.display = "none";
                side12.style.display = "none";
                side13.style.display = "none";
                side14.style.display = "none";
                side15.style.display = "none";
                side16.style.display = "block";
            }
        }
    }

    function toimintaLogiikka(){

        heitaClick();

        if(tuplaLaskuri > 2){
            fail = true;
            tuplaLaskuri = 0;
        }

        if(pelaajaVuoro == pelaajat.length) {
            pelaajaVuoro = 0;
        };
        
        if(pelaajaVuoro2 == pelaajat.length) {
            pelaajaVuoro2 = 0;
        }

        if(pelaajaVuoro == 0){
            valiSumma += noppaTesti;
            if(noppa2C){
                valiSumma += noppaTesti2;
            }
        }

        if(pelaajaVuoro == 1){
            valiSumma += noppaTesti;
            if(noppa2C){
                valiSumma += noppaTesti2;
            }
        }
        
        if(pelaajaVuoro == 2){
            valiSumma += noppaTesti;
            if(noppa2C){
                valiSumma += noppaTesti2;
            }
        }

        if(pelaajaVuoro == 3){
            valiSumma += noppaTesti;
            if(noppa2C){
                valiSumma += noppaTesti2;
            }
        }

        valiSummaDisplay.innerHTML = `${pelaajat[pelaajaVuoro]}:n vuoro`;
        valiSummaDisplay2.innerHTML = `Pelaajan pisteet: ${valiSumma}`;

        if(fail){
            if(ykköstuplat == false){
                valiSumma = 0;
            }
            lopetusClick();
            fail = false;
        };
    }
    
    function voittajaCheck(){
        let maxPisteet = maksimiPisteet.value;

        if(pelaaja1Score >= maxPisteet){
            peliruutu.style.display = 'none';
            dice.style.display = 'none';
            dice2.style.display = 'none';
            voittoruutu.style.display = 'block';
            voittaja = pelaaja1;
            voittoRuutuText.innerHTML = `Voittaja: ${voittaja}, päivitä sivu pelataksesi uudelleen.`;
        }
        if(pelaaja2Score >= maxPisteet){
            peliruutu.style.display = 'none';
            dice.style.display = 'none';
            dice2.style.display = 'none';
            voittoruutu.style.display = 'block';
            voittaja = pelaaja2;
            voittoRuutuText.innerHTML = `Voittaja: ${voittaja}, päivitä sivu pelataksesi uudelleen.`;
        }
        if(pelaaja3Score >= maxPisteet){
            peliruutu.style.display = 'none';
            dice.style.display = 'none';
            dice2.style.display = 'none';
            voittoruutu.style.display = 'block';
            voittaja = pelaaja3;
            voittoRuutuText.innerHTML = `Voittaja: ${voittaja}, päivitä sivu pelataksesi uudelleen.`;
        }
        if(pelaaja4Score >= maxPisteet){
            peliruutu.style.display = 'none';
            dice.style.display = 'none';
            dice2.style.display = 'none';
            voittoruutu.style.display = 'block';
            voittaja = pelaaja4;
            voittoRuutuText.innerHTML = `Voittaja: ${voittaja}, päivitä sivu pelataksesi uudelleen.`;
        }
    }

    function lopetusClick() {

        valiSummaDisplay.innerHTML = `Vuoro vaihtuu, seuraavana ${pelaajat[pelaajaVuoro2]}:n vuoro.`
            
        if(noppaTesti != 1){
            if(pelaajaVuoro == 0){
                pelaaja1Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti != 1){
            if(pelaajaVuoro == 1){
                pelaaja2Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti != 1){
            if(pelaajaVuoro == 2){
                pelaaja3Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti != 1){
            if(pelaajaVuoro == 3){
                pelaaja4Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti2 != 1){
            if(pelaajaVuoro == 0){
                pelaaja1Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti2 != 1){
            if(pelaajaVuoro == 1){
                pelaaja2Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti2 != 1){
            if(pelaajaVuoro == 2){
                pelaaja3Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti2 != 1){
            if(pelaajaVuoro == 3){
                pelaaja4Score += valiSumma;
                valiSumma = 0;
            }
        };

        if(noppaTesti == 1){
            if(noppaTesti2 == 1){
                if(pelaajaVuoro == 0){
                    if(noppa2C){
                        pelaaja1Score += 25;
                        valiSumma = 0;
                    }
                }
                if(pelaajaVuoro == 1){
                    if(noppa2C){
                        pelaaja1Score += 25;
                        valiSumma = 0;
                    }
                }
                if(pelaajaVuoro == 2){
                    if(noppa2C){
                        pelaaja1Score += 25;
                        valiSumma = 0;
                    }
                }
                if(pelaajaVuoro == 3){
                    if(noppa2C){
                        pelaaja1Score += 25;
                        valiSumma = 0;
                    }
                }
            }
        }
        ykköstuplat = false;
        pelaajaVuoro += 1;
        pelaajaVuoro2 += 1;

        if(pelaajaVuoro == pelaajat.length) {
            pelaajaVuoro = 0;
        };
        
        if(pelaajaVuoro2 == pelaajat.length) {
            pelaajaVuoro2 = 0;
        }

        voittajaCheck();
        screenUpdate();
    };
        

    function otsikkoClassAdd() {
        otsikko.classList.add("otsikkoanimaatio");
        otsikko.classList.remove("otsikkoanimaatio2");
        nuoli.classList.add("otsikkoanimaatio");
        nuoli.classList.remove("otsikkoanimaatio2");
        nuoli2.classList.add("otsikkoanimaatio");
        nuoli2.classList.remove("otsikkoanimaatio2");
    }

    function otsikkoClassRemove() {
        otsikko.classList.add("otsikkoanimaatio2");
        otsikko.classList.remove("otsikkoanimaatio");
        nuoli.classList.add("otsikkoanimaatio2");
        nuoli.classList.remove("otsikkoanimaatio");
        nuoli2.classList.add("otsikkoanimaatio2");
        nuoli2.classList.remove("otsikkoanimaatio");
    }

    function saantoSivu() {
        form.style.display = "none";
        saantosivu.style.display = "block";
    }

    function takaisinSivu() {
        saantosivu.style.display = "none";
        form.style.display = "block";
    }
    saannotInput.addEventListener("click", saantoSivu);

    takaisinInput.addEventListener("click", takaisinSivu);

    setInterval(otsikkoClassAdd, 500);
    setInterval(otsikkoClassRemove, 1000);

    form.addEventListener("submit", submitClick);

    pelaaja1Input.addEventListener("mouseover", function() {
        pelaaja1Nappi.classList.add("clicksmall");
        pelaaja1Input.classList.add("clicksmall");
    });

    pelaaja1Input.addEventListener("mouseout", function() {
        pelaaja1Nappi.classList.remove("clicksmall");
        pelaaja1Input.classList.remove("clicksmall");
    });

    pelaaja2Input.addEventListener("mouseover", function() {
        pelaaja2Nappi.classList.add("clicksmall");
        pelaaja2Input.classList.add("clicksmall");
    });

    pelaaja2Input.addEventListener("mouseout", function() {
        pelaaja2Nappi.classList.remove("clicksmall");
        pelaaja2Input.classList.remove("clicksmall");
    });

    pelaaja3Input.addEventListener("mouseover", function() {
        pelaaja3Nappi.classList.add("clicksmall");
        pelaaja3Input.classList.add("clicksmall");
    });

    pelaaja3Input.addEventListener("mouseout", function() {
        pelaaja3Nappi.classList.remove("clicksmall");
        pelaaja3Input.classList.remove("clicksmall");
    });

    pelaaja4Input.addEventListener("mouseover", function() {
        pelaaja4Nappi.classList.add("clicksmall");
        pelaaja4Input.classList.add("clicksmall");
    });

    pelaaja4Input.addEventListener("mouseout", function() {
        pelaaja4Nappi.classList.remove("clicksmall");
        pelaaja4Input.classList.remove("clicksmall");
    });

    submitInput.addEventListener("mouseover", function() {
        submitNappi.classList.add("clicksmall");
        submitInput.classList.add("clicksmall");
    });

    submitInput.addEventListener("mouseout", function() {
        submitNappi.classList.remove("clicksmall");
        submitInput.classList.remove("clicksmall");
    });

    saannotInput.addEventListener("mouseover", function() {
        saantoNappi.classList.add("clicksmall");
        saannotInput.classList.add("clicksmall");
    });

    saannotInput.addEventListener("mouseout", function() {
        saantoNappi.classList.remove("clicksmall");
        saannotInput.classList.remove("clicksmall");
    });

    heita.addEventListener("mouseover", function() {
        heita.classList.add("clicksmall");
        heita.classList.add("clicksmall");
        heitaTeksti.classList.add("clicksmall");
        heitaTeksti.classList.add("clicksmall");
    });

    heita.addEventListener("mouseout", function() {
        heita.classList.remove("clicksmall");
        heita.classList.remove("clicksmall");
        heitaTeksti.classList.remove("clicksmall");
        heitaTeksti.classList.remove("clicksmall");
    });

    heita.addEventListener("click", function() {
        toimintaLogiikka();
    }); 
    
    heitaTeksti.addEventListener("click", function() {
        toimintaLogiikka();
    });  

    heitaTeksti.addEventListener("mouseover", function() {
        heita.classList.add("clicksmall");
        heita.classList.add("clicksmall");
        heitaTeksti.classList.add("clicksmall");
        heitaTeksti.classList.add("clicksmall");
    });

    heitaTeksti.addEventListener("mouseout", function() {
        heita.classList.remove("clicksmall");
        heita.classList.remove("clicksmall");
        heitaTeksti.classList.remove("clicksmall");
        heitaTeksti.classList.remove("clicksmall");
    });

    vuoronLopetusNappi.addEventListener("mouseover", function() {
        vuoronLopetusNappi.classList.add("clicksmall");
        vuoronLopetusNappi.classList.add("clicksmall");
        lopetaTeksti.classList.add("clicksmall");
        lopetaTeksti.classList.add("clicksmall");
    });

    vuoronLopetusNappi.addEventListener("mouseout", function() {
        vuoronLopetusNappi.classList.remove("clicksmall");
        vuoronLopetusNappi.classList.remove("clicksmall");
        lopetaTeksti.classList.remove("clicksmall");
        lopetaTeksti.classList.remove("clicksmall");
    });

    vuoronLopetusNappi.addEventListener("click", function() {
        lopetusClick();
    });  

    lopetaTeksti.addEventListener("click", function() {
        lopetusClick();
    });  
    
    lopetaTeksti.addEventListener("mouseover", function() {
        vuoronLopetusNappi.classList.add("clicksmall");
        vuoronLopetusNappi.classList.add("clicksmall");
        lopetaTeksti.classList.add("clicksmall");
        lopetaTeksti.classList.add("clicksmall");
    });

    lopetaTeksti.addEventListener("mouseout", function() {
        vuoronLopetusNappi.classList.remove("clicksmall");
        vuoronLopetusNappi.classList.remove("clicksmall");
        lopetaTeksti.classList.remove("clicksmall");
        lopetaTeksti.classList.remove("clicksmall");
    });
});