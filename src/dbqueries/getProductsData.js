import Axios from 'axios'

const titleUrl = 'https://baconipsum.com/api/?type=all-meat&paras=1&format=text&sentences=2'
const contentUrl = 'https://baconipsum.com/api/?type=all-meat&paras=2&format=text&sentences=2'

export { getProductImage, getProductTitle, getProductContent, getProductsCount }

function getProductImage (id) {
  const choice = {
    0: 'https://ladyclub.org/wp-content/uploads/2017/03/Podrostkovaja-odezhda-dlja-devochek-345x200.jpg',
    1: 'https://letberry.ru/wp-content/uploads/Polo-340x200.jpg',
    2: 'https://finmarketspb.ru/image/cache/adaptive/catalog/myshop/novosti/obuv/kakuy%20obuv%20vibrat%20dlya%20mezhsezonia/1-345x200.jpg',
    3: 'https://lh3.googleusercontent.com/proxy/Eyu5mILHR9LuPL1mkbRD52n_zQWGlZGVIONzO9nLOj1n9KY6r1J88Z7D_Nwmnl6cyHxy2WZkJlXaZXL43BFGR85bbHZuQakjUFY_TqprUTyM',
    4: 'https://ladyclub.org/wp-content/uploads/2014/12/Zaprety-v-odezhde-devushek-s-bolshimi-bedrami-345x200.jpg',
    5: 'https://sovsemnedorogo.com.ua/image/cache/catalog/zim-blog/zim_10-cr-345x200.jpg',
    6: 'https://cdn.thecoolist.com/wp-content/uploads/2017/12/Special-Attributes-smoking-jacket-345x200.jpg',
    7: 'https://cdn.thecoolist.com/wp-content/uploads/2017/12/History-of-Smoking-Jacket-345x200.jpg',
    8: 'https://cdn.thecoolist.com/wp-content/uploads/2017/12/Wearing-a-Smoking-Jacket-345x200.jpg',
    9: 'https://cdn.thecoolist.com/wp-content/uploads/2017/12/Todays-Smoking-Jacket-345x200.jpeg',
    default: 'https://cdn.thecoolist.com/wp-content/uploads/2017/04/Sack-types-of-suits-1-345x200.jpg'
  }
  return choice[id] || choice.default
}

function getProductsCount () {
  return 11
}

async function getProductTitle () {
  const data = await Axios.get(titleUrl)
  return data.data
}

async function getProductContent () {
  const data = await Axios.get(contentUrl)
  return data.data
}
