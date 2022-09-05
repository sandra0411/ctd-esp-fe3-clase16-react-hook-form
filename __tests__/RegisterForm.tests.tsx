import { render, screen } from '@testing-library/react'

describe('RegisterForm', () => {
    describe('when rendering default form', () => {
        it('should render the heading', () => {

        })
        it('should render the label & input field for Username', () => {

        })
        it('should render the label & input field for Password', () => {

        })
        it('should render the label & input field for Email', () => {

        })
        it('should render the label & input field for Address', () => {

        })
        it('should render submit button', () => {
        })
        it('should render focus on username field', () => {
        })
    })
    describe('when input a valid form', () => {
        it('should show registered success message', async () => {
        })
        it('should show the username of the registered user', async () => {
        })
    })
    describe('when input invalid form', () => {
        describe('without username', () => {
            it('should show username is required', async () => {
            })
        })
        describe('without password', () => {
            it('should show password is required', async () => {
            })
        })
        describe('without email', () => {
            it('should show email is required', async () => {
            })
        })
        describe('without address', () => {
            it('should show address is required', async () => {
            })
        })
        describe('with a less than required username', () => {
            it('should show at least 3 chars message', async () => {
            })
        })
    })
})