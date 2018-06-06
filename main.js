// Vue product cart component

Vue.component('productcart', {
  template: `
    <div id='productsList'>
      <div id='cart-items' v-for='item, index in filteredList.slice(((pagenumber-1) * 8), (pagenumber * 8))'>
          <div id='product-image'>
            <img v-bind:src='item.itemImage' v-bind:alt='item.Name' />
            <div id='product-delete-overlay' @click='deleteProduct(index)'>
              <i class="fa fa-trash"></i>
              <span> Delete </span>
            </div>
          </div>
          <div id='product-description'>
            <div id='product-name'>
              {{item.Name}}
            </div>
            <div id='product-price'>
              {{item.Price}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  props: ['products', 'pagenumber', 'searchvalue'],
  mounted () {
    console.log('products ', this.products)
  },
  computed: {
    filteredList () {
      let currentData = this.products
      if (!this.searchvalue) {
        return currentData
      }
      return this.products.filter(data => {
        return data.Name.toLowerCase().includes(this.searchvalue.toLowerCase())
      })
    }
  },
  methods: {
    deleteProduct: function (id) {
      if (this.products.length >= id) {
        var deleteItem = this.products.splice(id, 1)
        // console.log(' deleted data and remaining data ', id, this.products.length)
        var myToast = Toastify({
          text: deleteItem[0].Name + ' was Deleted',
          duration: 1000
        })
        myToast.showToast()
      }
    }
  }
})

// Create instance here
var vueObj = new Vue({
  el: '#shopCart',
  data: {
    message: 'balaji',
    currentPage: 1,
    search: '',
    // Sample Json data
    cartData: [
      {
        id: 1,
        Name: 'Women slim fit',
        Price: '$12.49',
        itemImage: './assets/1.jpg'
      },
      {
        id: 2,
        Name: 'Gen Shoe',
        Price: '$22.49',
        itemImage: './assets/2.jpg'
      },
      {
        id: 3,
        Name: 'Dark Gray pant',
        Price: '$29.99',
        itemImage: './assets/3.jpg'
      },
      {
        id: 4,
        Name: 'Modern Dress',
        Price: '$92.49',
        itemImage: './assets/4.jpg'
      },
      {
        id: 5,
        Name: 'Casual dress',
        Price: '$11.49',
        itemImage: './assets/5.jpg'
      },
      {
        id: 6,
        Name: 'Black shoe',
        Price: '$12.49',
        itemImage: './assets/6.jpg'
      },
      {
        id: 7,
        Name: 'Slip Fit Chinos',
        Price: '$22.49',
        itemImage: './assets/7.jpg'
      },
      {
        id: 8,
        Name: 'Pink Dress',
        Price: '$29.99',
        itemImage: './assets/8.jpg'
      },
      {
        id: 9,
        Name: 'Modern Women dress',
        Price: '$92.49',
        itemImage: './assets/9.jpg'
      },
      {
        id: 10,
        Name: 'Checked Short Dress',
        Price: '$12.49',
        itemImage: './assets/10.jpg'
      },
      {
        id: 11,
        Name: 'Gens pant',
        Price: '$22.49',
        itemImage: './assets/11.jpg'
      },
      {
        id: 12,
        Name: 'Dark Brown Pant',
        Price: '$29.99',
        itemImage: './assets/12.jpg'
      },
      {
        id: 13,
        Name: 'Black Shoe',
        Price: '$92.49',
        itemImage: './assets/13.jpg'
      },
      {
        id: 14,
        Name: 'Normal dress',
        Price: '$11.49',
        itemImage: './assets/14.jpg'
      },
      {
        id: 15,
        Name: 'Formal shoe',
        Price: '$11.49',
        itemImage: './assets/15.jpg'
      },
      {
        id: 16,
        Name: 'Casual women dress',
        Price: '$11.49',
        itemImage: './assets/16.jpg'
      },
      {
        id: 17,
        Name: 'Gray Shoe',
        Price: '$11.49',
        itemImage: './assets/17.jpg'
      },
      {
        id: 18,
        Name: 'Watch',
        Price: '$11.49',
        itemImage: './assets/18.jpg'
      },
      {
        id: 19,
        Name: 'Glass',
        Price: '$11.49',
        itemImage: './assets/19.jpg'
      },
      {
        id: 20,
        Name: 'T-Shirt',
        Price: '$11.49',
        itemImage: './assets/20.jpg'
      },
      {
        id: 21,
        Name: 'Gray T-shirt',
        Price: '$11.49',
        itemImage: './assets/21.jpg'
      },
      {
        id: 22,
        Name: 'Gray pant',
        Price: '$11.49',
        itemImage: './assets/22.jpg'
      }
    ]
  },
  methods: {
    maxPageNumber: function () {
      if (parseInt(this.cartData.length % 8) === 0) {
        return parseInt(this.cartData.length / 8)
      } else {
        return parseInt(this.cartData.length / 8) + 1
      }
    },
    updateScreenProducts: function (newPage) {
      this.currentPage = newPage
    },
    isActivePage: function (pageNo) {
      if (this.currentPage === pageNo) {
        return true
      } else {
        return false
      }
    }
  }
})
