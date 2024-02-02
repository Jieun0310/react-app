import React, { Component } from 'react';
import './ExpenseItem.css';
import { MdEdit, MdDelete, MdSend } from 'react-icons/md';

export class ExpenseItem extends Component {
  render() {
    return (
      <li className="item">
        <div className="info">
          <span className="expense"></span>
          <span className="amount">원</span>
        </div>
        <div>
          <button className="edit-btn">
            수정
            <MdEdit />
          </button>
          <button className="clear-btn">
            삭제
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}

export default ExpenseItem;
