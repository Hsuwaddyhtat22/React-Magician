import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  const buttons = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', 'Del', '=',
  ];

  return (
    <div className="calculator">
      <div className="input">
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { calculatorData.next || calculatorData.total || '0' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </div>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      <div className="buttons">
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        {
            buttons.map((button) => (

              <button
                key={button}
                type="button"
                onClick={
                    () => handleClick(button)
                }
              >
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { button }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }
                {' '}
                { ' ' }

              </button>
            ))
        }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </div>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }

    </div>
  );
}

export default Calculator;
