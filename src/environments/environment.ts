// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  port: 3000,
  // host: 'http://95.217.233.152',
  host: 'http://localhost',
  CLOUDINARY_URL: 'cloudinary://488525641611823:4M75mBjzDkzaIdqmlP9Q_ulYA8E@vipul8896',
  CLOUDINARY_SECRET: '4M75mBjzDkzaIdqmlP9Q_ulYA8E',
  user: {
    login: '/api/user/login',
    forgotPassword: '/api/user/forgot-password',
    allUsers: '/api/user/allusers',
    searchUser: '/api/user/searchUser',
    getAllCategories: '/api/admin/fetch/categories',
    saveCategories: '/api/admin/add/categories',
    addProduct: '/api/admin/add/product',
    getAllProduct: '/api/admin/fetch/products',
    updateProduct: '/api/admin/update/product'
  },
  statastics: '/api/admin/statastics'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
