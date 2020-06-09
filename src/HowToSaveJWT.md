# LocalStorage vs. Cookies

## LocalStorage

### Pros
* Not prone to CSRF attacks 

### Cons
* Prone to XSS (Cross-Site-Scripting) attacks
## Cookies

### Pros
* SameSite, secure, HttpOnly attributes can help against attacks

### Cons
* Prone to CSRF (Cross-site request forgery) and XSS attacks


## Solution?

* Use two tokens -> refresh token and JWT
* Send both tokens on login
* JWT less expiry time, Refresh Token long expiry time
* Save JWT in LocalStorage and refresh token in cookie
* Use JWT to call API
* On expiry call auth server using refresh token 
* Auth server checks if refresh token is valid and returns a new JWT
* Once refresh token expires user gets logged out
