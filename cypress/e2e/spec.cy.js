describe('TC1: Register User', () => {
   it('Navigate to url', () => {
   // 2. Navigate to url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com/')

   // 3. Verify that home page is visible successfully
    cy.contains('Products')

   // 4. Click on "Signup / Login" button
    cy.contains('Signup / Login').click()

   // 5. Verify "New User Signup!" is visible
    cy.contains("New User Signup!")

   // 6. Enter name and email address
   cy.get('[data-qa="signup-name"]').type('Rade Knezevic1')
   cy.get('[data-qa="signup-email"]').type('radek@mail.com')

   // 7. Click 'Signup' button
   cy.get('[class="btn btn-default"]').eq(1).click()

   // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
   cy.contains('Enter Account Information')

   // 9. Fill details: Title, Name, Email, Password, Date of birth
   cy.get('[type="radio"][id="id_gender1"]').check()
   cy.get('[type="password"]').type('sifra1')
   cy.get('select[id="days"]').select(10)
   cy.get('select[id="months"]').select(2)
   cy.get('select[id="years"]').select('1988')

   // 10. Select checkbox 'Sign up for our newsletter!'
   cy.get('input[type="checkbox"][id="newsletter"]').click()

   // 11. Select checkbox 'Receive special offers from our partners!'
   cy.get('input[type="checkbox"][id="optin"]').click()

   // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
   cy.get('input[id="first_name"]').type("Rade")
   cy.get('input[id="last_name"]').type("Knezevic")
   cy.get('input[id="company"]').type("Solvera Montenegro D.O.O")
   cy.get('input[id="address1"]').type("Knez Miletina 29/9, Beograd")
   cy.get('input[id="address2"]').type("Mainski put 51, Budva")
   cy.get('select[id="country"]').select('Singapore')
   cy.get('input[id="state"]').type('Montenegro')
   cy.get('input[id=city]').type('Budva')
   cy.get('input[id=zipcode]').type('85310')
   cy.get('input[id=mobile_number]').type('+381645005147')

   // 13. Click 'Create Account button'
   cy.get('button[data-qa="create-account"]').click()

   // 14. Verify that 'ACCOUNT CREATED!' is visible
   cy.contains('Account Created!')

   // 15. Click 'Continue' button
   cy.get('[data-qa=continue-button]').click()

   // 16. Verify that 'Logged in as username' is visible
   cy.contains('Logged in as Rade Knezevic1')

   // 17. Click 'Delete Account' button
   cy.visit("https://automationexercise.com/delete_account")
   //cy.get('a[href="/delete account"]')

   // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
   cy.get('h2').contains("Account Deleted!")
   })
})


/*
    1. Launch browser
    2. Navigate to url 'http://automationexercise.com'
    3. Verify that home page is visible successfully
    4. Click on 'Signup / Login' button
    5. Verify 'New User Signup!' is visible
    6. Enter name and email address
    7. Click 'Signup' button
    8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    9. Fill details: Title, Name, Email, Password, Date of birth
    10. Select checkbox 'Sign up for our newsletter!'
    11. Select checkbox 'Receive special offers from our partners!'
    12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    13. Click 'Create Account button'
    14. Verify that 'ACCOUNT CREATED!' is visible
    15. Click 'Continue' button
    16. Verify that 'Logged in as username' is visible
    17. Click 'Delete Account' button
    18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
*/
