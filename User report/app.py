from flask import Flask, render_template, request

app = Flask(__name__)

data = [
    {
    'username':'Ronak',
    'password':'a7B9xC4zQ3',
    'email_content': "Dear Ronak,We’re excited to announce a new 3-day free trial for our premium service at ProServices! This offer allows you to explore all our premium features, including exclusive resources and priority support, at absolutely no cost.To sign up, simply visit our website and click on the “Free Trial” option. This offer is available for a limited time, so don’t miss your chance to try out our premium benefits risk-free. We’re confident that you’ll find value in the enhanced service.Thank you for choosing ProServices. Act now to take advantage of this special opportunity!Warm regards,Michael ChenMarketing TeamProServicesinfo@proservices.com",
    'accuracy_score': 92.454233982053122,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'kierawarrior9@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ4',
    'email_content': "Dear Ronak,At PureHealth, we’re always striving to improve our products, and your feedback plays an essential role in this process. We value the experiences of customers like you and would love to hear your thoughts on recent purchases or overall satisfaction with our offerings.By participating in our feedback survey, you’ll be contributing to our mission of creating high-quality products that meet the needs and expectations of our customers. The survey takes only a few minutes to complete and covers aspects like product quality, ease of use, and your overall experience with us.To show our appreciation, participants in the survey will be entered into a monthly raffle where winners can receive exclusive PureHealth merchandise or a discount on their next purchase. Your feedback is invaluable in helping us continue to improve and serve you better.Thank you for being a valued part of the PureHealth community!Warm regards,Lucas GreenCustomer Experience Team PureHealth feedback@purehealth.com",
    'accuracy_score': 95.576847493774648,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'shyamsunilkumar2457@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ2',
    'email_content': "Dear Ronak, We’re thrilled to inform you that you have been selected as a winner in our monthly customer appreciation draw! As a token of our gratitude, we’re awarding you with a special gift from GreenGlow.Your prize will be shipped to you within the next few days. No further action is required on your part—just sit back and enjoy! If you have any questions about this prize, please feel free to reach out to our support team. Once again, congratulations on your win! We look forward to continuing to bring you quality products that you love. Get your gifts now! : https://bit.ly.gift/login Sincerely, Emma Johnson Customer Relations Team GreenGlow support@greenglow.com",
    'accuracy_score': 96.6748738478398,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'kierawarrior9@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ1',
    'email_content': "Dear ronak,The holiday season is upon us, and we’re excited to offer you an exclusive discount on our best-selling products! For a limited time, shop at ZenStyle and enjoy a special 20% off your entire purchase. This offer is our way of saying thank you for being a loyal customer and is available only until the end of the month.To redeem this discount, simply apply the code HOLIDAY20 at checkout. With limited quantities available, this is the perfect opportunity to stock up on your favorites or find holiday gifts for loved ones.Book your slots now: https://slotsholiday.google.com Don’t miss out on this limited-time offer! Act now to take advantage of these savings before they’re gone.Best regards,Alex Turner Sales Manager ZenStyle deals@zenstyle.com",
    'accuracy_score': 97.75874837494793,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'kierawarrior9@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ5',
    'email_content': "Dear ronak,We’re thrilled to inform you that you have been selected as our lucky winner! To celebrate, we are offering you a special prize just for you! Click here to claim your exclusive offer and enjoy your cash reward today. Remember, this is a limited-time opportunity, so act now to secure your prize!Don’t miss out on this guaranteed win! We look forward to helping you celebrate!Best regards,The Prize Team",
    'accuracy_score': 94.567373662763,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'adarshsmenon28@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ6',
    'email_content': "Hi ronak,Don’t wait! Your exclusive discount is set to expire soon, and we don’t want you to miss out on this offer. Act now and take advantage of this risk-free chance to save big. Simply click here and use the promo code “SAVE50” at checkout to redeem.This limited-time discount won’t last long, so hurry and buy now before it’s gone!Warm regards,MFC Support Team",
    'accuracy_score': 93.46574637633827,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'askm2802@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ7',
    'email_content': "Hello ronak,Congratulations! You’ve been selected for a free trial of our premium service. This exclusive offer is our way of saying thank you for being an amazing customer! Enjoy full access at no cost for 30 days, risk-free.This trial is only available for a short time, so click here to activate your free subscription. We promise you’ll love it!Sincerely,mfc",
    'accuracy_score': 95.768574893626,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'askm2802@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ8',
    'email_content': "Hi ronak,You have been randomly selected in our latest lottery! You’re eligible for a cash reward that can be claimed free of charge. Just click here to register and become an instant winner!This is an urgent notification, as the offer will expire soon. Don’t let this chance to win big slip away!Best wishes,mfc",
    'accuracy_score': 96.4783773736497,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'adarshsm2028@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
,
{
    'username':'Ronak',
    'password':'a7B9xC4zQ9',
    'email_content': "Hi ronak,You have been randomly selected in our latest lottery! You’re eligible for a cash reward that can be claimed free of charge. Just click here to register and become an instant winner!This is an urgent notification, as the offer will expire soon. Don’t let this chance to win big slip away!Best wishes,mfc",
    'accuracy_score': 92.5764537498,
    'attachment_analysis': 'This file is most probably classified as phishing/malicious mail based on content analysis.',
    'domain_reputation': "Could not retrieve reputation for domain 'adarshsm2028@gmail.com'",
    'url': "This is NOT a Safe URL",
    'content_analysis': 'This email is most probably classified as phishing/malicious mail based on content analysis. This email is NOT classified as phishing/malicious mail.',
    'email_type' : 'This email might be phishing.',
}
]

@app.route('/')
def index():
    return render_template('index.html', data=[], not_found=False)

@app.route('/getDetails', methods=['POST'])
def get_details():
    username = request.form['username']
    password = request.form['password']
    user_data = next((item for item in data if item['username'] == username and item['password'] == password), None)
    if user_data:
        return render_template('index.html', data=[user_data], not_found=False)
    else:
        return render_template('index.html', data=[], not_found=True)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)
