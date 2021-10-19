const serviceDetails = [
    {
        id : 's1',
        title: 'About Blood Bank',
        description: 'We have introduced telemeeting service for the local patients of Chattogram, Bogra, Cumilla, Sylhet, Khulna, Mymennsingh, Narayanganj and Noakhali. This is a service through which the patients will attend a video conference with concern Consultants over skype as per their need. Patients are now able to avail doctor consultation of Evercare Hospital Dhaka directly through this service being present at local information centers. Patients can receive consultation, follow up and advices relating medicine, diet and lifestyle by this service. Telemeeting is facilitated by video conferencing through which patients with skin diseases and with any physical injury can show the affected sites to doctors. Apart from these, in emergency cases while running out of time parents of child patients can receive emergency consultation from pediatric Consultants by dint of this service.',
        img: 'https://i.ibb.co/VWKsz4Z/service1.jpg'
    },
    {
        id : 's2',
        title: 'About Telemeeting',
        description: 'Evercare Blood Bank is a place for collecting, screening, typing, processing, and storing whole blood, packed red blood cells, fresh frozen plasma and platelet concentrate, gathered as a result of blood donation, preserved for patient use in this hospital and other hospitals on request. Evercare Blood Bank, located in basement level of the hospital, is the first government registered hospital blood bank in Dhaka Metropolitan Area. We are committed to keeping pace with the demands of providing 24-hour service by cutting-edge technology and the most secure blood transfusion policy, and we maintain quality in every stride. We provide blood and blood product by standard protocol in all aspects of blood screening, grouping, compatibility testing, component preparation, storage, and transportation. Temperature of preserved blood and blood component is strictly maintained in each step. We also provide blood and blood component to other hospitals in case of emergency. In Evercare Blood Bank, most blood for transfusion is collected from family members and friends as a replacement donation system. Directed and Volunteer donors also donate blood, especially at times of need of rare blood group.',
        img: 'https://i.ibb.co/Fm7ZtZ8/service2.jpg'
    },
    {
        id : 's3',
        title: 'About Vaccination Program',
        description: 'Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger. Vaccines train your immune system to create antibodies, just as it does when it’s exposed to a disease. However, because vaccines contain only killed or weakened forms of germs like viruses or bacteria, they do not cause the disease or put you at risk of its complications.',
        img: 'https://i.ibb.co/h8gFyvL/service3.jpg'
    },
    {
        id : 's4',
        title: 'About Day Care Service',
        description: 'The Day Care Unit is a unique wing of Evercare Hospital Dhaka to help patients with specific need-based treatment in an out-patient basis. Patients in Day Care are those who undergo procedures not requiring overnight nursing care or stay in the hospital. Patients can have the procedure and then rest and be monitored in Day Care Unit for a few hours after the procedure. Afterwards, they can return home that same day. The hospital has four Day Care Units, all of which provide proper monitoring and care by staff nurse and Consultants who are in touch at all times about patient’s condition. All beds in Day Care Unit are equipped with life supports. Tariff for availing Day Care Unit facility (maximum 6 hours stay) is Tk. 800 per hour.',
        img: 'https://i.ibb.co/g7v4tN3/service4.jpg'
    },
    {
        id : 's5',
        title: 'About Admissiom and Payment Procedure',
        description: `Admission: Our Admission Desk provides 24-hour service. If you are getting admitted from out-patient consultation, on your arrival at the Admission Desk, you will be requested to provide some information, which will enable us to handle your case with better understanding and also to keep track for follow-up at a later date. This information is necessary and we appreciate your cooperation with our admission personnel. You are requested to give the correct information, as this may also help you in case of insurance claim.

        Payment: For payments, you may contact our billing personnel at level-1 beside Admission Desk or at level 6 and 7 between 9:00 am to 5:00 pm. Payment should be made only to Billing Department personnel and not to any other individual. `,
        img: 'https://i.ibb.co/j5FdJyh/service5.jpg'
    },
    {
        id : 's6',
        title: 'About Master Health Check ( MHC )',
        description: `It is known that “prevention is better than cure”. Evercare Hospital Dhaka recognizes the importance of preventive healthcare and has created a separate clinic to help you with these needs.

        We realize the importance of family history of disease in an individual’s life. A family medical history help in identifying a person with a risk of having common diseases such as heart disease, high blood pressure, stroke, certain cancers, diabetes, thyroid disorders etc. Together, these factors can give clues to medical conditions that may run in a family. Thus, we have designed a Ready Reckoner for an individual to participate in the process of selection of his/her own health screening package based on that individual’s family medical history.
        
        The General Health Checks are designed for those who do not have any specific mentionable family history of disease. It should be combined with Supplementary Health Checks for those having specific family history or personal medical history e.g. if an individual has family history of heart disease then he should avail Health Check General and Supplementary Heart Check together.`,
        img: 'https://i.ibb.co/wC9HfRD/service6.jpg'
    },
    {
        id : 's7',
        title: 'About Tests and Procedures',
        description: `Tests/Investigations:
        To schedule a test/investigation, please call the relevant OPD front desks.
        Your lab investigation samples are to be deposited in the Sample Collection Room located in the hospital’s atrium, which is open on working days (Saturday-Thursday) from 7.00 am to 10:00 pm, and on Fridays and holidays from 7.00 am to 3.00 pm.
        Your investigation reports can be collected from Report Delivery Room by showing the receipt of payment. The hospital shall not be responsible for reports not collected within 30 days after the tests were done. Report Delivery Room is also located in the hospital’s atrium, and is open on working days (Saturday-Thursday) from 8.00 am to 8.30 pm, and on Fridays and holidays from 9.00 am to 5.00 pm.
        You will not be able to collect your investigation reports without your receipt of payment. If you have lost your receipt, you may collect a duplicate copy from our Billing Executives (Corporate Desk, Atrium – level 1).
        You can request duplicate copy of your investigation reports from the Report Delivery Room, inclusive of BDT 100 additional charge.
        Procedures & Surgeries:
        If you are interested in undergoing a procedure or surgery, please see our relevant Consultant first.
        To search for a Consultant, go to Find Consultant page and for appointments, go to Make Appointment page.`,
        img: 'https://i.ibb.co/3pKBM8m/service7.jpg'
    },
    {
        id : 's8',
        title: 'About FAQ',
        description: `
        1. How do I find a Doctor?
        2. How do I make Appointments to see a doctor?
        3. How do I schedule tests and out-patient procedures?
        4. What is Master Health Check?
        5. What are the Departments & Services?
        6. What are the Emergency numbers?
        7. Who can I call for assistance in the hospital during odd hours or holidays?
        8. Do I need to register to avail any service at Evercare Hospital Dhaka?
        9. What are the services for international patients?
        10. What are the services for corporate clients?
        11. Who do I contact with billing questions or to get copies of my payment receipt?
        12. Which insurance providers does the hospital have agreement with?`,
        img: 'https://i.ibb.co/nDh35cX/service8.jpg'
    },
]