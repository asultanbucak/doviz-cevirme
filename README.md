Döviz Çevirme Uygulaması

Bu çalışma, React ve Vite ortamında geliştirilmiş bir döviz hesaplama uygulamasıdır. FreeCurrencyAPI üzerinden çekilen canlı kurlar sayesinde, farklı para birimleri arasında anlık çevrim yapılmasına olanak tanır.



-Teknik Yapı

Proje, bileşen tabanlı (component-based) bir mimari üzerine inşa edilmiştir. Arayüz tarafında modern bir görünüm için Inter yazı tipi ailesi ve özelleştirilmiş CSS sınıfları tercih edilmiştir.



-Kullanılan Araçlar

 React & Vite: Proje iskeleti ve hızlı geliştirme ortamı.
 Axios: API üzerinden döviz verilerini çekmek için HTTP istemcisi.
 React Hooks: Uygulama içindeki miktar, kur seçimi ve sonuç yönetimi için useState kullanımı.
 Google Fonts: Tipografi tarafında Inter font entegrasyonu.



-Proje Klasör Yapısı

 src/components/currency.jsx: Döviz çevrim mantığının ve API isteklerinin yönetildiği ana bileşen.
 src/css/currency.css: Uygulamanın görsel tasarımı ve responsive yapısı.
 App.jsx: Bileşenlerin bir araya getirildiği ana kapsayıcı.



-Kurulum ve Çalıştırma

Projeyi yerelinizde çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın: `git clone https://github.com/asultanbucak/doviz-cevirme.git`
2. Bağımlılıkları yükleyin: `npm install`
3. Uygulamayı başlatın: `npm run dev`
