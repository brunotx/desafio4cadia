import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Parse from 'parse';
import { AccountModel } from '../model/account';


@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private router: Router) { }

    createAccount(userId) {
        const endAccount = Math.floor(Math.random() * 1999) - 1000;
        const Account = Parse.Object.extend('Account');
        const myNewObject = new Account();

        myNewObject.set('Conta', '1234' + endAccount);
        myNewObject.set('Saldo', '3000');
        myNewObject.set('userId', userId);

        myNewObject.save().then(
            (result) => {
            },
            (error) => {
                if (typeof document !== 'undefined') { document.write(`Error while creating Account: ${JSON.stringify(error)}`); }
                console.error('Error while creating Account: ', error);
            }
        );
    }

    async getAccount(userId) {
        let contas = [];
        const Account = Parse.Object.extend('Account');
        const query = new Parse.Query(Account);
        query.equalTo("userId", userId);
        await query.find().then((results) => {
            for (let i = 0; i < results.length; i++) {
                const element = results[i];
                const conta = {
                    bank: element.get('Bank'),
                    agencia: element.get('Agencia'),
                    conta: element.get('Conta'),
                    saldo: parseInt(element.get('Saldo')),
                };
                contas.push(conta);
                return contas;
            }
        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while fetching Account: ${JSON.stringify(error)}`);
            console.error('Error while fetching Account', error);
        });
        return contas;
    }

    async getBankStatements(userId) {
        let bankStatements = [];
        const BankStatement = Parse.Object.extend('BankStatement');
        const query = new Parse.Query(BankStatement);
        query.equalTo('userId', userId);
        await query.find().then((results) => {
            for (let i = 0; i < results.length; i++) {
                const element = results[i];
                const bankStatement = {
                    value: element.get('value'),
                    description: element.get('description'),
                    date: element.get('createdAt'),
                };
                console.log(bankStatement);
                bankStatements.push(bankStatement);
                return bankStatements;
            }
        }, (error) => {
            if (typeof document !== 'undefined') { document.write(`Error while fetching BankStatement: ${JSON.stringify(error)}`); }
            console.error('Error while fetching BankStatement', error);
        });
        return bankStatements;
    }
}
