<script>
const myApiUrl = 'http://localhost:3000/'
export default {
  getProducts () {
    return fetch(myApiUrl)
      .then((response) => {
        return response.json()
      })
  },
  createProduct (name, description, price, tva) {
    return fetch(myApiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'name': name,
          'descripton': description,
          'prix': price,
          'tva': tva
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  deleteProduct (id) {
  },
  editProduct (name, description, dated, datef, statut) {
    return fetch(myApiUrl + id, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'name': name,
          'descripton': description,
          'dated': datef,
          'datef': dated,
          'statut': statut
        }
      )
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
  },
  getProduct (id) {
    console.log(myApiUrl + id)
    return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })
  }
}
</script>
