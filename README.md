# Unit-test

# 5-6
Teen esimest testi, aga see annab vea.

<img width="443" height="277" alt="image" src="https://github.com/user-attachments/assets/d5e0e1b6-df00-42cf-ae2f-76aa89223757" />

Lisasin olemasolevale paroolitestile viis uut testi: 7 ja 9 märgi pikkune parool, tühi parool, ainult tühikud ning tühikud sõnade vahel. Käivitasin testid käsuga npm test. Täpselt 8 märgi pikkuse parooli test ebaõnnestus: oodatud tulemus oli true, kuid funktsioon tagastas false.

<img width="463" height="167" alt="image" src="https://github.com/user-attachments/assets/4a79ba5f-ab9b-4a66-8d0a-d953bdd969d7" />

# 7

Paroolifunktsioonis oli viga: tingimus password.length > 8 ei lubanud täpselt 8 märgi pikkust parooli. Muutsin tingimuse kujule password.length >= 8 ja käivitasin uuesti npm test. Kõik kuus paroolitesti läbisid edukalt.

<img width="287" height="140" alt="image" src="https://github.com/user-attachments/assets/4c12621c-f4f0-4075-bb60-7e47705b4ab7" />

# 8-9

Lisasin viis ostukorvi testi: ühe ja mitme toote summa, sooduskood STUDENT10 ning ostusummad 99 € ja 100 €. Käivitasin npm test. Kaks testi ebaõnnestusid: sooduskoodiga oli oodatud tulemus 90 €, kuid sain 95 €; 100 € ostu puhul sain oodatud 100 € asemel 105 €.

<img width="511" height="332" alt="image" src="https://github.com/user-attachments/assets/40b47635-cec3-4175-acc6-545e3d7aca23" />


# 10

Saatmiskulu tingimus oli vale: see lisas saatmiskulu ka täpselt 100 € ostule ning kontrollis summat pärast allahindlust. Muutsin tingimuseks subtotal < 100, kasutades ostusummat enne allahindlust. Käivitasin npm test ja kõik 12 testi läbisid edukalt.
 
<img width="344" height="199" alt="image" src="https://github.com/user-attachments/assets/18367941-a1bb-43c1-969b-d8c3de92e832" />

# 12

Lisasin testi, mis kontrollib, et funktsioon viskab vea, kui items ei ole massiiv. Kasutasin toThrow() kontrolli ja andsin sisendiks stringi 'abc'. Käivitasin npm test ning kõik 13 testi läbisid edukalt.

<img width="310" height="129" alt="image" src="https://github.com/user-attachments/assets/d5be2036-3cdd-4be0-a274-a73875c4200c" />

# 13

Käivitasin käsu npm run coverage. Kõik 13 testi läbisid edukalt. Failide cart.js ja password.js koodikatvus oli kõigi näitajate järgi 100%. Katmata ridu ei olnud. 100% koodikatvus ei tõesta siiski, et programm on täiesti veatu.

<img width="665" height="271" alt="image" src="https://github.com/user-attachments/assets/9949644e-da51-4fb5-8eb4-6a6a098bed30" />

# 15-17

Lisasin enne koodi muutmist sooduskoodi FREESHIP testi. Käivitasin npm test. Uus test ebaõnnestus: oodatud tulemus oli 10 €, kuid funktsioon tagastas 15 €. See on TDD Red-etapp.

<img width="305" height="113" alt="image" src="https://github.com/user-attachments/assets/f1687f5f-536c-4101-8988-a52909fc03d9" />

Muutsin saatmiskulu tingimust nii, et koodi FREESHIP korral saatmiskulu ei lisata. Käivitasin uuesti npm test ning kõik 14 testi läbisid edukalt. See on TDD Green-etapp.

<img width="281" height="106" alt="image" src="https://github.com/user-attachments/assets/0692ad77-d46d-472a-9346-d6eae83e93ea" />

Käivitasin regressioonikontrolliks käsud npm test ja npm run coverage. Kõik 14 testi läbisid edukalt. Kontrollisin, et FREESHIP annab tasuta saatmise ning varasemad funktsioonid töötavad endiselt õigesti: STUDENT10 allahindlus, saatmiskulu arvestamine, tühi ostukorv ja vigase sisendi kontroll. Uus muudatus ei rikkunud olemasolevat funktsionaalsust.

<img width="556" height="251" alt="image" src="https://github.com/user-attachments/assets/961de22f-1958-41f5-8d5d-8c6a7b9381be" />

