import React from 'react';

import image_1 from "../images/346878451240442.jpeg";
import image_2 from "../images/Samizdat.jpg";
import image_3 from "../images/Depositphotos_73146765_l-2015.jpg";

import "../styles/mainpage.css"

const MainPage = () => {
    return (
        <>
            <div className={"main-block"}>
                <div className={"quotes-block"}>
                    <h2>""</h2>
                    <p>“The more that you read, the more things you will know. The more that you learn, the more places you'll go.” - Dr. Seuss</p>
                    <p>“A room without books is like a body without a soul.” - Marcus Tullius Cicero</p>
                    <p>“You can never get a cup of tea large enough or a book long enough to suit me.” - C.S. Lewis</p>
                    <h2>""</h2>
                </div>
                <div className={"block-1"}>
                    <div className={"img-frame"}>
                        <img className={"img-1"} src={image_1} alt=""/>
                    </div>
                    <div className={"p-1"}>
                        <h3>The Magic Within Pages</h3>
                        In the quiet corners of my room, I find solace in the company of books. Each volume is a gateway to another world, a vessel carrying the magic of countless stories. As I turn the pages, I step into realms unknown, where dragons soar and heroes rise. Books are not mere objects; they are spells woven with ink and paper, enchanting my mind and stirring my imagination. In the hush of the night, I find myself lost in the symphony of words, a melody that echoes through the ages. Oh, the magic within these pages, a timeless enchantment that binds my soul to the vast tapestry of human stories.
                    </div>
                </div>
                <div className={"block-2"}>
                    <div className={"p-2"}>
                        <h3>Ode to the Bookshelf</h3>
                        Behold the bookshelf, a sanctuary of knowledge and dreams. Rows upon rows of wisdom and tales, neatly arranged like treasures in a chest. Each book, a sentinel standing proudly, bearing the weight of stories untold. From the classics that whisper the echoes of centuries to the contemporary tales that mirror our own, the bookshelf is a haven for the curious and the dreamer. It's a voyage through time and space, a pilgrimage to the heart of human thought. And as I run my fingers along the spines, I feel the pulse of literature, a heartbeat that resonates with the collective soul of humanity.
                    </div>
                    <div className={"img-frame"}>
                        <img className={"img-2"} src={image_2} alt=""/>
                    </div>
                </div>
                <div className={"block-3"}>
                    <div className={"img-frame"}>
                        <img className={"img-3"} src={image_3} alt=""/>
                    </div>
                    <div className={"p-3"}>
                        <h3>The Journey of a Bookworm</h3>
                        In the secret chambers of my imagination, I embark on a journey fueled by the written word. A bookworm, they call me, and proudly I wear the title. With each book, I traverse landscapes painted in prose and characters that become my comrades. The worn pages and dog-eared corners are badges of honor, signs of battles fought and victories won in the vast realms of literature. The journey of a bookworm is not a solitary one; it's a grand expedition into the wonders of the human mind. So, as I flip through the next chapter, I relish the anticipation of what worlds await, for in the company of books, I am forever an explorer in the vast sea of stories.
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;