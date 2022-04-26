import React from 'react'
import BenefitItem from './BenefitItem';

const Benefits = () => {
  return (
    <div className="benefits">
        <div className="container">
            <div className="benefits__heading">
                <h2 className='gold'>Working at Ballistic</h2>
                <p>
                    Ea eiusmod minim est nostrud ex aute minim. Lorem veniam fugiat aliqua consequat irure exercitation ut fugiat do quis cupidatat enim duis. Commodo minim exercitation Lorem nisi exercitation. Cillum aliqua aliquip sint adipisicing ullamco quis esse eiusmod labore ut commodo magna.
                    Eiusmod anim cillum laboris ipsum ex non adipisicing id exercitation aliquip. Aliquip deserunt velit esse mollit qui culpa irure. Sint aliquip sunt duis occaecat fugiat mollit consectetur nulla proident. Nulla dolore mollit reprehenderit aute pariatur incididunt aliqua in ut Lorem do. In nulla ut et nostrud eiusmod culpa fugiat do fugiat velit duis incididunt irure.
                </p>
            </div>
            <div className="benefits__list">
                <BenefitItem title={'Flexible Work From Home Policy'}/>
                <BenefitItem title={'15 Days flexible pto + earned seniority'}/>
                <BenefitItem title={'401K with employer matching'}/>
                <BenefitItem title={'medical, vision, and dental insurance'}/>
                <BenefitItem title={'perfomance based bonuses'}/>
                <BenefitItem title={'company-paid laptop + home office equipment'}/>
            </div>
        </div>
    </div>
  )
}

export default Benefits