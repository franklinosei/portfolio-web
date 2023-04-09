import React from "react";
import Banner from "../../common/components/banner";
import AreastOfInterestSection from "./components/areas.of.interest";
import ContactMe from "./components/contact.me";
import PersonalBlogSection from "./components/personal.blog";
import HomeProjectSection from "./components/projects.section";
import MyTechStack from "./components/tect.stack";



export default function Home() {


    return (

        <div className="home-wrapper">
            <section>
                <Banner />
            </section>
            <main className="home-content p-4 md:p-8">

                <section className="projects-section">
                    <HomeProjectSection />
                </section>

                <section className="areas__of__interest mt-12">
                    <AreastOfInterestSection />
                </section>

                <section className="my__stack mt-12">
                    <MyTechStack />
                </section>

                <section className="personal__blog mt-12">
                    <PersonalBlogSection />
                </section>

                <section className="contact__section mt-12">
                    <ContactMe />
                </section>

            </main>

        </div>







    )
}