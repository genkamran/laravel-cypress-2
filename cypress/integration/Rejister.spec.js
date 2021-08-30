describe('Register an User',() =>{
    beforeEach(() => {

        cy.visit('/');

        //cy.exec("php artisan migrate:refresh && php artisan db:seed");


    });
    context('Valid Credentials',()=>{

        it('Enter User Details',()=>{

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a','Register').click();

            cy.get('#name').type('Muhammad Kamran');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamran2211@gmail.com');

            cy.get('#password').type('12345678');

            cy.get('#password_confirmation').type('12345678');

            cy.contains('button','Register').click();


        });



    });

    context('Password confirmation',()=> {

        it('Unmatched Password', () => {

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a', 'Register').click();

            cy.get('#name').type('Muhammad Kamran');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamran2321@gmail.com');

            cy.get('#password').type('12345678');

            cy.get('#password_confirmation').type('12346548');

            cy.contains('button', 'Register').click();

            cy.contains('The password confirmation does not match');

        });

        it('invalid Password Length',()=>{

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a','Register').click();

            cy.get('#name').type('Muhammad Kamran');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamran2430@gmail.com');

            cy.get('#password').type('12345');

            cy.get('#password_confirmation').type('12345');

            cy.contains('button','Register').click();

            cy.contains('The password must be at least 8 characters.');

        });

    });

    context('Email confirmation',()=> {

        it('Existing Email', () => {

            //cy.visit('http://laravel-cypress.test/');

            cy.contains('a', 'Register').click();

            cy.get('#name').type('Muhammad Kamran');

            cy.log('Enter Email');

            cy.get('#email').type('muhammadkamran2211@gmail.com');

            cy.get('#password').type('12345678');

            cy.get('#password_confirmation').type('12345678');

            cy.contains('button', 'Register').click();

            cy.contains('The email has already been taken.');

            cy.contains('a','Already registered').click();

            cy.get('#email').type('muhammadkamran2211@gmail.com');

            cy.get('#password').type('12345678');

            cy.get('#remember_me').click();

            cy.contains('button', 'Log in').click();

            cy.get('*[class="ml-1"]').click();

            cy.contains('a','Log Out').click();

        });

        it('Invalid Email address', () => {

            // cy.visit('http://laravel-cypress.test/');

            cy.contains('a', 'Register').click();

            cy.get('#name').type('Muhammad Kamran');

            //cy.get('#name').type('kamran');

            cy.get('#email').type('muhammadkamran2');

            cy.get('#password').type('12345678');

            cy.get('#password_confirmation').type('12344400');

            cy.contains('button', 'Register').click();

            //cy.contains('Please include @ in email address');

        });

    });

});
