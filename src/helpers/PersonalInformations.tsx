export type Personal = {
    mailAdress: string;
    phoneNumber: string;
    linkedin: string;
    github: string;
    malt: string;
}

export function PersonalInformations() {
    const informations: Personal = {
        mailAdress: "kevinfichou@gmail.com",
        phoneNumber: "0635158379",
        linkedin: "https://www.linkedin.com/in/kevin-fichou-177328172/",
        github: "https://github.com/kemrode",
        malt: "https://www.malt.fr/profile/kevinfichou"
    }
    return informations
}