import React from 'react'
import { FaChevronCircleUp} from 'react-icons/fa'
import { useState } from 'react'

const Faq = () => {
    const data = [
        {
            question: 'Question 1 ?',
            answer: 'ANSWER : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus itaque voluptatum,'
        },
        {
            question: 'Question 2 ?',
            answer: 'ANSWER : lorem159 ipsum dolor sit amet consectetur adipisicing elit. Natus itaque voluptatum,'
        },
        {
            question: 'Question 3 ?',
            answer: 'ANSWER : lorem10 dolor sit amet consectetur adipisicing elit. Natus itaque voluptatum,'
        },
        {
            question: 'Question 4 ?',
            answer: 'ANSWER : lorem15 dolor sit amet consectetur adipisicing elit. Natus itaque voluptatum,'
        },
        {
            question: 'Question 5 ?',
            answer: 'ANSWER : lorem20 dolor sit amet consectetur adipisicing elit. Natus itaque voluptatum,'
        }
    ];
        const [click,setClick]=useState(null);
        const handleClick=(i)=>{
            setClick(i);
            if(click===i){
                setClick(null);
            }
        }
    return (
        <>
            <section className='faq'>
                <h1>FAQ</h1>
                {
                    data.map((item,i) => {
                        return (
                            <>
                            <div className="maindiv" key={i} onClick={()=>handleClick(i)}>
                                <div className="faq_question">
                                    <div className='question'><span>{item.question}</span></div>
                                    <div id='uparrow'><FaChevronCircleUp className={click===i && "uparrow"}/></div>
                                </div>
                                <div className={click===i ? "faq_question":"faq_answer show"} id="ans">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                            </>
                        )
                    }
                    )
                }
            </section>
        </>
    )
}

export default Faq