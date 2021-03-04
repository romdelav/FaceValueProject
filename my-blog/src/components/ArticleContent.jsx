const articles = [
    {
        name: `racial-bias`,
        title: `"I guess the computer got it wrong": Uncovering Racial Bias in Facial Recognition Technology`,
        date: `December, 15, 2020`,
        readingTime:`4 minutes`,
        content: [ 
            `Earlier this year, Robert Williams, 42, was arrested on suspicion of stealing watches from a Shinola 
            retail store he had not patronized in years. Falsely identified as the suspect by Michigan State Police's 
            face recognition software, he spent a total of 30 hours in detention. Charges were dismissed once investigators 
            realized that “the computer got it wrong,” making this incident the first wrongful arrest in the U.S. due to a 
            facial recognition mismatch.`, 
            `Since its early days, facial recognition has raised questions among privacy advocates and ethics watchdogs who have 
            repeatedly warned against data collection, processing, and storage methods as well as unregulated use of the technology. 
            William’s story brought to light yet another – and perhaps more radical – set of concerns: just how reliable is facial 
            recognition to begin with? Could William's story be yet another example of what many have described as 
            'racial bias' in facial biometric systems?`, 
            `Social psychologists agree that humans tend to perceive faces of their own "race" more acutely than those of other races. 
            Referred to as “cross-race effect” or “other-race effect,” this phenomenon has been supported by a large corpus of evidence.
            Some hypotheses suggest that the amount of exposure to and experience with a specific race group is correlated with the ability 
            to recognize individuals from that group. This may very well explain how some systems struggle to identify people of color, especially 
            women. According to the 2018 “Gender Shades” project, algorithms developed by Microsoft, Amazon, and IBM, among others, yielded 
            disconcerting results. Darker-skinned females were in some cases over 34% more likely to be misidentified than light-skinned males. Why such significant dispairities? How can something as inherently human as perceptual bias be embedded in code?`, 
            `Nowadays, facial recognition systems rely on machine-learning frameworks to train complex algorithms by feeding them large 
            image datasets. Those images are generally categorized by age, gender, and skin tone among other metrics. The 
            more an algorithm is fed images of diverse faces, the more proficient it becomes in identifying those faces. Conversely, low public availability 
            of diverse datasets may result in performance bias and algorithms that struggle to recognize faces to which they have been less exposed..`, 
            `What steps have companies and organizations taken to address this lack of representation? In January, IBM decided to publicly release a database 
            of a million faces that better reflect the variety of skin tones found in the real world. Named “Diversity in Faces,” this massive dataset was 
            meant “to advance the study of fairness and accuracy in facial recognition technology.” However, this initiative quickly backfired when NBC 
            News journalist Olivia Solon revealed that many of those images had been harvested from the photo-hosting site Flickr without proper consent. 
            While IBM guaranteed users that they could opt out of the database, doing so proved very difficult. Indeed, IBM required them to email links to 
            the images they wanted removed, but never publicly shared the list of Flickr users whose photos were included in the dataset. In the wake of this 
            controversy and as Black Lives Matter protests erupted all over the country following George Floyd’s death, IBM ultimately decided to abandon its 
            facial recognition research program, deeming it complicit in enacting new modes of racial profiling. `, 
            `But not everyone gave up on the technology. Innovative solutions are being developed to reduce bias occurrences without infringing on privacy 
            rights. One of them is per-subject adversarially-enabled data augmentation. This approach uses generative adversarial network (GAN) to transfer 
            racial attributes of a human face while preserving individual identity features. This makes it possible to produce different versions of the same 
            face across multiple race groups, thus increasing the diversity of dataset images. In other words, adversarially-enabled data augmentation attempts 
            to mitigate bias at the pre-processing level (data preparation) by creating fairer datasets.`, 
            `Another solution was suggested by James Tate, a member of Detroit’s city council, in a recent interview for the New York Times. In November 2020, 
            Tate voted to approve a contract extension for the facial recognition software that had misidentified Robert Williams, arguing that some of the 
            technology’s flaws could be overcome through regulatory policy. While Tate knows that this solution is not ideal, he wants to reframe the narrative 
            on facial recognition: its success in solving cases should not overshadow the few incidents that occurred along the way. According to him, efficient 
            checks and balances have been implemented following William’s wrongful arrest. Those include requiring multiple approvals, limiting the use of facial 
            recognition to serious crimes, and being supervised by a civilian oversight board. Despite those changes, many are still doubtful. `, 
            `Celebrated by some as a powerful tool of law enforcement, berated by others as a dangerous instrument of profiling, facial recognition has elicited 
            mixed, if not polarized responses. Those have compelled experts to reassess not just the conditions in which it should be used, but whether it should 
            be used at all given its current limitations. Answering these questions is urgent. Until then, other Roberts Williams will most likely suffer the 
            consequences.`
        ],
        links: [

        ]
    }
]

export default articles;