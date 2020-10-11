import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import {} from'react-native';
import NewsBanner from './components/NewsBanner'

const news_data = [
  {
    id:0,
    title:'Finans',
    descp:'Dolarda rekor, S400, Biden...',
    imageurl:"https://i.sozcu.com.tr/wp-content/uploads/2020/10/10/iecrop/sss_16_9_1602316258-880x495.jpg",
    paper:'Sözcü  -  ',
    time: 14 + ' minutes'

  },
  {
    id:1,
    title:'Sinema',
    descp:'Saygı| Bir Ercüment Çözer Dizisinin yayın tarihi belli oldu ',
    imageurl:"https://i2.milimaj.com/i/milliyet/75/0x0/5eff1f8a5542821ba02a2f47.jpg",
    paper:'T24  -  ',
    time: 5 + ' minutes'

  },
  {
    id:2,
    title:'Gündem',
    descp:'Eğlence merkezine Koranavirüs baskını: 239 bin lira ceza kesidi',
    imageurl : "https://media-cdn.t24.com.tr/media/library/2020/10/1602316048049-polis-korona-partisini-basti-239-bin-tl-ceza-kesildi-5336-dhaphoto-4.jpg",
    paper:'T24  -  ',
    time:25 + ' minutes'

  },
  {
    id:3,
    title:'Politika',
    descp:'Sedat Ergin: AB Komisyonunun Türkiye ile ilgili hazırladığı son Ülke Ra...',
    imageurl: "https://media-cdn.t24.com.tr/media/library/2020/10/1602004635071-eu-turkey.jpg",
    paper:'T24  -  ',
    time:5 + ' minutes'

  },
  {
    id:4,
    title:'Gündem',
    descp:'Buldan ve Sancar: Orman yangınlarının sorumlularını lanetliyoruz',
    imageurl: "https://static.bundle.app/news/ztv4siw4.wmi.jpg",
    paper:'Independent Türkçe  -  ',
    time:5 + ' minutes'

  },
  {
    id:5,
    title:'Gündem',
    descp:"İsmail Küçükkaya'dan Fatih Portakal'la ilgili çarpıcı açıklamalar",
    imageurl: "https://static.bundle.app/news/0rvor3gc.cxf.jpg",
    paper:'Cumhuriyet  -  ',
    time:4 + ' minutes'

  },
  {
    id:6,
    title:'Bilim',
    descp:"Dünyanın En Hızlı kamerasıyla Fotonlar Gerçek Zamanlı Olarak Kaydedildi",
    imageurl: "https://www.gercekbilim.com/wp-content/uploads/2020/10/uv-cup-kamera-foton-fotografi.jpg",
    paper:'Gerçek Bilim  -  ',
    time:4 + ' minutes'

  },
  {
    id:7,
    title:'Gündem',
    descp:"Dünyada genelinde 37 milyon 475 bin 839 kişi Kovid-19’a yakalandı",
    imageurl: "https://static.bundle.app/news/kyx0mtyo.srs.jpg",
    paper:'Independent Türkçe  -  ',
    time:4 + ' minutes'

  },
]





const App = ()=>{
  return(
    <SafeAreaView style = {{flex:1}}>
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>News</Text>
        <View>
        {news_data.map(news=>{return(
          <NewsBanner
          title = {news.title}
          descp = {news.descp}
          imageurl = {news.imageurl}
          paper = {news.paper}
          time = {news.time}
          /> 
          
        )})}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {flex:1},
  text : { textAlign:'center',
fontSize:20},

})



export default App;