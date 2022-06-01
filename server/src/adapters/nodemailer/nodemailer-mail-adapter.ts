import nodemailer from 'nodemailer';
import { brotliDecompressSync } from 'zlib';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1da7d2c2266fcb",
      pass: "9f05d70e58a3ae"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body} :SendMailData) {
           await transport.sendMail({
       from: 'Equipe Feedget <oi@feedget.com',
       to: 'Manoela Pivatto <manucp_@hotmail.com>',
       subject,
       html: body,
         
   });

};

}