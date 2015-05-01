# Hack Battle 2015

## BrownSugar ##

## TO DO

- [ ] Store products on LocalStorage
- [ ] Search products by proximity
- [x] Retrieve geolocation from Browser ([see](http://dev.w3.org/geo/api/spec-source.html)) - Renan
- [x] Calculate distance between coordinates - Renan
- [ ] Upload product picture to Dropbox
- [ ] Verify seller mobile number
- [ ] Send SMS to seller
- [ ] Slice HTML
- [ ] Integrate sliced HTML into templates

## WebServer

To take advantages of some browser capabilities, like geolocation, we need to run the app in a webserver. Simple static webserver will do. In the absence, just do:

```shell
python -m SimpleHTTPServer 3000
```

And open [localhost:3000](http://localhost:3000).

## Dependencies

To install dependencies such as Bower packages, which are included in the VCS for ease:

```
npm install -g bower
bower install
```


## Docs

Flowchat editor
https://www.draw.io/


## Contributors

- [Fahad Ibnay Heylaal](https://github.com/fahad19)
- [Renan "Saddam" Gonçalves](https://github.com/renan)
- [Renato "Cornera" Cardoso](https://github.com/re2005)
- [Renato "Renas" Cavallari](https://github.com/renasboy)
