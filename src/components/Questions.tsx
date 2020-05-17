import React, { useState } from 'react'
import Button from './Button'
import './index.css'

interface QuestionProps {
  question: any
}

const Question = ({ question }: QuestionProps) => {
  const [isSelected, setIsSelected] = useState({
    first: false,
    second: false,
  })

  return (
    <div className="question">
      <p>{question.text}</p>
      <div>
        <Button
          onClick={() =>
            setIsSelected({ first: !isSelected.first, second: false })
          }
          title={question.selections[0]}
          isSelected={isSelected.first}
          className="button__margin-right"
        />
        <Button
          onClick={() =>
            setIsSelected({ first: false, second: !isSelected.second })
          }
          title={question.selections[1]}
          isSelected={isSelected.second}
        />
      </div>
    </div>
  )
}

const arrayOfQuestions = [
  {
    text: 'On walks, I am more intrigued by',
    selections: ['People', 'Bushes'],
  },
  {
    text: 'On walks, I am more intrigued by',
    selections: ['People', 'Bushes'],
  },
  {
    text: 'On walks, I am more intrigued by',
    selections: ['People', 'Bushes'],
  },
  {
    text: 'On walks, I am more intrigued by',
    selections: ['People', 'Bushes'],
  },
  {
    text: 'On walks, I am more intrigued by',
    selections: ['People', 'Bushes'],
  },
]

const Questions = () => {
  return (
    <div className="questions">
      {arrayOfQuestions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  )
}

export default Questions
