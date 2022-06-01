import { SubmitFeedbackUseCase } from "./submit-feedback-use-case" 

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {} },
    { sendMail: async () => {} }
);


describe('Submit feedback', () => {
    it('Should be able to submit a feedaback', async() => {
       await expect(submitFeedback.execute({
            type:'BUG',
            comment: 'example comment',
            screenshot: 'test.png',
        })).resolves.not.toThrow();
    });


    it('Should not be able to submit a feedaback type', async() => {
       await expect(submitFeedback.execute({
            type:'BUG',
            comment: 'example comment',
            screenshot: 'test.png',
        })).resolves.not.toThrow();
    });
});