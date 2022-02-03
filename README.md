# Práctica Calificada (Step - 2)

- Se deben implementar las vistas segun el diseño establecido
- Se debe utilizar el API proporcionado (Ver Documentacion del API)
- EL proyecto ya incluye Bootstrap + Paleta de colores
- Considerar la rubrica de calificación
  <br><br>

# Vue Ecommerce App

Se debe desarrollar una pagina web de acuerdo a los prototipos
<br><br>

# Referencia

URL : [Link de prototipos](https://www.figma.com/proto/KfvXzfkC7NVBSo1CQAYA7E/APP-ECOMMERCE?page-id=0%3A1&node-id=58%3A2961&viewport=344%2C48%2C0.58&scaling=scale-down&starting-point-node-id=58%3A2961)

![ejercicio](/assets/prototipos.png)
<br><br>

# 📂 Estructura del proyecto

```bash
├── assets/
│   │── favicon.png                 # favicon (icono)
│   │── loading.gif                 # loader image
│   │── logo.png                    # logo
├── css                             # css
│   │── bootstrap.css               # bootstrap + Theme colors
│   └── styles.css                  # custom css
├── js                              # main source code
│   ├── api                         # api service
│   │   └── client.js               # client api module (permite la conexion al API)
│   ├── components                  # vue components
│   │   │── category_item.js        # category list item
│   │   │── category_list.js        # category list
│   │   │── loader.js               # loader
│   │   │── navbar.js               # upper navbar
│   │   │── product_item.js         # product list item
│   │   │── product_list.js         # product list
│   │   └── search_input.js         # search input
│   ├── pages                       # route pages
│   │   │── categories_page.js      # categories page (empty)
│   │   │── edit_product_page.js    # edit product page (empty)
│   │   │── login_page.js           # login page
│   │   │── products_page.js        # products page
│   │   └── register_page.js        # register page (empty)
│   ├── utils                       # js utils
│   │   └── storage.js              # storage module
│   └── app.js                      # main file (vue app)
├── layouts                         # helper templates
│   └── product.html                # product view html layouts
├── index.html                      # main index file
```

> NOTA 1: Los archivos que estan vacios (Empty) corresponden a las paginas que se deben implementar
> <br><br>

# 👨‍💻 Rubrica de calificación

| Caracteristica         | Puntaje   |
| ---------------------- | --------- |
| CRUD Categorias        | 6pts      |
| CRUD Productos         | 5pts      |
| Registro               | 4pts      |
| Información de usuario | 5pts      |
| **Total**              | **20pts** |

<br><br>

# 📖 Documentación del API

URL : http://silabuz-api-project.herokuapp.com

Fully Docs : http://silabuz-api-project.herokuapp.com/swagger/

The REST API for Silabuz Products Api

## Login session

Login user session platform

#### Request

`POST /authentication/login/`

    URL:            '/authentication/login/'
    HEADERS:        'Accept: application/json'

| Attribute | Description           |
| --------- | --------------------- |
| username  | username              |
| password  | PAssword email access |

    {
        "username": "cargamos",
        "password": "c4rg4m0s"
    }

## Register

Register platform

#### Request

`POST /authentication/sign-up/`

    URL:            '/authentication/sign-up/'
    HEADERS:        'Accept: application/json'

| Attribute | Description             |
| --------- | ----------------------- |
| username  | username for newaccount |
| password  | password for newaccount |
| email     | email for newaccount    |
| is_staff  | true / false            |

## Category CREATE

Create category

#### Request

`GET /api/products/categories/`

    URL:            '/products/categories/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute | Description    |
| --------- | -------------- |
| name      | categorie name |

## Category Read

Get list of category (Required authentication)

#### Request

`GET /products/categories/`

    URL:            'products/categories/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/categories/?name={CATEGORYNAMEhere}`

    URL:            'products/categories/?name={CATEGORYNAMEhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/categories/?search={KEYWORDhere}`

    URL:            'products/categories/?search={KEYWORDhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

## Category UPDATE

Category data update

#### Request

`PUT products/categories/IDhere/`

    URL:            'products/categories/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute     | Description   |
| ------------- | ------------- |
| category-name | Category Name |

## CATEGORY DELETE

Delete category

#### Request

`DELETE products/categories/{IDhere}/`

    URL:            'products/categories/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute | Description |
| --------- | ----------- |
| -         | -           |

## Product CREATE

Create product

#### Request

`POST /products/products/`

    URL:            '/products/products/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute      | Description           |
| -------------- | --------------------- |
| name           | product name          |
| category_id    | category ID           |
| description    | product description   |
| price          | price product         |
| discount_price | discount price        |
| image_url      | url image             |
| is_active      | is available in stock |

## Product Read

Get list of products

#### Request

`GET /products/products/`

    URL:            'products/products/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/products/?name={PRODUCTNAMEhere}`

    URL:            'products/categories/?name={PRODUCTNAMEhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/products/?category={CATEGORYIDhere}`

    URL:            'products/categories/?search={CATEGORYIDhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

`GET products/products/?category__name={CATEGORYNAMEhere}`

    URL:            'products/products/?category__name={CATEGORYNAMEhere}'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

## Product UPDATE

Product data update

#### Request

`PUT products/products/IDhere/`

    URL:            'products/products/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute      | Description         |
| -------------- | ------------------- |
| name           | product name        |
| category_id    | category ID         |
| description    | product description |
| price          | price product       |
| discount_price | discount price      |
| image          | url image           |

## Product DELETE

Delete Product

#### Request

`DELETE products/products/{IDhere}/`

    URL:            'products/products/{IDhere}/'
    HEADERS:        'Accept: application/json , Authorization: Token {UserToken}'

| Attribute | Description |
| --------- | ----------- |
| -         | -           |
