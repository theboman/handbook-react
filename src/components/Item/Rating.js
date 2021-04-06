import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 0.5rem;
`

const SVG = styled.svg`
    width: 15px;
    fill: gray;
    margin-right: 0.2rem;
`

const Rating = () => {
    return (
        <Wrapper>
            <SVG viewBox="0 0 16 16"><path d="M2.86612 14.85C2.78812 15.294 3.22612 15.641 3.61212 15.443L8.00212 13.187L12.3911 15.443C12.7771 15.641 13.2151 15.294 13.1371 14.851L12.3071 10.121L15.8291 6.765C16.1591 6.451 15.9891 5.877 15.5471 5.815L10.6491 5.119L8.46512 0.791999C8.42351 0.704288 8.35787 0.630182 8.27583 0.578292C8.19378 0.526401 8.0987 0.498856 8.00162 0.498856C7.90454 0.498856 7.80945 0.526401 7.72741 0.578292C7.64536 0.630182 7.57972 0.704288 7.53812 0.791999L5.35412 5.12L0.456118 5.816C0.0151183 5.878 -0.155882 6.452 0.173118 6.766L3.69612 10.122L2.86612 14.852V14.85ZM7.77112 12.083L4.08512 13.977L4.77912 10.02C4.79538 9.92891 4.78902 9.83523 4.76059 9.74717C4.73217 9.65912 4.68256 9.57939 4.61612 9.515L1.71012 6.745L5.76212 6.169C5.84602 6.15633 5.92561 6.12351 5.99405 6.07335C6.0625 6.02319 6.11776 5.95719 6.15512 5.881L8.00012 2.223L9.84712 5.881C9.88447 5.95719 9.93974 6.02319 10.0082 6.07335C10.0766 6.12351 10.1562 6.15633 10.2401 6.169L14.2921 6.744L11.3861 9.514C11.3195 9.57849 11.2698 9.65839 11.2414 9.74663C11.213 9.83487 11.2067 9.92876 11.2231 10.02L11.9171 13.977L8.23112 12.083C8.15984 12.0463 8.08081 12.0271 8.00062 12.0271C7.92043 12.0271 7.8414 12.0463 7.77012 12.083H7.77112Z"></path></SVG>

            <SVG viewBox="0 0 16 16"><path d="M2.86612 14.85C2.78812 15.294 3.22612 15.641 3.61212 15.443L8.00212 13.187L12.3911 15.443C12.7771 15.641 13.2151 15.294 13.1371 14.851L12.3071 10.121L15.8291 6.765C16.1591 6.451 15.9891 5.877 15.5471 5.815L10.6491 5.119L8.46512 0.791999C8.42351 0.704288 8.35787 0.630182 8.27583 0.578292C8.19378 0.526401 8.0987 0.498856 8.00162 0.498856C7.90454 0.498856 7.80945 0.526401 7.72741 0.578292C7.64536 0.630182 7.57972 0.704288 7.53812 0.791999L5.35412 5.12L0.456118 5.816C0.0151183 5.878 -0.155882 6.452 0.173118 6.766L3.69612 10.122L2.86612 14.852V14.85ZM7.77112 12.083L4.08512 13.977L4.77912 10.02C4.79538 9.92891 4.78902 9.83523 4.76059 9.74717C4.73217 9.65912 4.68256 9.57939 4.61612 9.515L1.71012 6.745L5.76212 6.169C5.84602 6.15633 5.92561 6.12351 5.99405 6.07335C6.0625 6.02319 6.11776 5.95719 6.15512 5.881L8.00012 2.223L9.84712 5.881C9.88447 5.95719 9.93974 6.02319 10.0082 6.07335C10.0766 6.12351 10.1562 6.15633 10.2401 6.169L14.2921 6.744L11.3861 9.514C11.3195 9.57849 11.2698 9.65839 11.2414 9.74663C11.213 9.83487 11.2067 9.92876 11.2231 10.02L11.9171 13.977L8.23112 12.083C8.15984 12.0463 8.08081 12.0271 8.00062 12.0271C7.92043 12.0271 7.8414 12.0463 7.77012 12.083H7.77112Z"></path></SVG>

            <SVG viewBox="0 0 16 16"><path d="M2.86612 14.85C2.78812 15.294 3.22612 15.641 3.61212 15.443L8.00212 13.187L12.3911 15.443C12.7771 15.641 13.2151 15.294 13.1371 14.851L12.3071 10.121L15.8291 6.765C16.1591 6.451 15.9891 5.877 15.5471 5.815L10.6491 5.119L8.46512 0.791999C8.42351 0.704288 8.35787 0.630182 8.27583 0.578292C8.19378 0.526401 8.0987 0.498856 8.00162 0.498856C7.90454 0.498856 7.80945 0.526401 7.72741 0.578292C7.64536 0.630182 7.57972 0.704288 7.53812 0.791999L5.35412 5.12L0.456118 5.816C0.0151183 5.878 -0.155882 6.452 0.173118 6.766L3.69612 10.122L2.86612 14.852V14.85ZM7.77112 12.083L4.08512 13.977L4.77912 10.02C4.79538 9.92891 4.78902 9.83523 4.76059 9.74717C4.73217 9.65912 4.68256 9.57939 4.61612 9.515L1.71012 6.745L5.76212 6.169C5.84602 6.15633 5.92561 6.12351 5.99405 6.07335C6.0625 6.02319 6.11776 5.95719 6.15512 5.881L8.00012 2.223L9.84712 5.881C9.88447 5.95719 9.93974 6.02319 10.0082 6.07335C10.0766 6.12351 10.1562 6.15633 10.2401 6.169L14.2921 6.744L11.3861 9.514C11.3195 9.57849 11.2698 9.65839 11.2414 9.74663C11.213 9.83487 11.2067 9.92876 11.2231 10.02L11.9171 13.977L8.23112 12.083C8.15984 12.0463 8.08081 12.0271 8.00062 12.0271C7.92043 12.0271 7.8414 12.0463 7.77012 12.083H7.77112Z"></path></SVG>

            <SVG viewBox="0 0 16 16"><path d="M2.86612 14.85C2.78812 15.294 3.22612 15.641 3.61212 15.443L8.00212 13.187L12.3911 15.443C12.7771 15.641 13.2151 15.294 13.1371 14.851L12.3071 10.121L15.8291 6.765C16.1591 6.451 15.9891 5.877 15.5471 5.815L10.6491 5.119L8.46512 0.791999C8.42351 0.704288 8.35787 0.630182 8.27583 0.578292C8.19378 0.526401 8.0987 0.498856 8.00162 0.498856C7.90454 0.498856 7.80945 0.526401 7.72741 0.578292C7.64536 0.630182 7.57972 0.704288 7.53812 0.791999L5.35412 5.12L0.456118 5.816C0.0151183 5.878 -0.155882 6.452 0.173118 6.766L3.69612 10.122L2.86612 14.852V14.85ZM7.77112 12.083L4.08512 13.977L4.77912 10.02C4.79538 9.92891 4.78902 9.83523 4.76059 9.74717C4.73217 9.65912 4.68256 9.57939 4.61612 9.515L1.71012 6.745L5.76212 6.169C5.84602 6.15633 5.92561 6.12351 5.99405 6.07335C6.0625 6.02319 6.11776 5.95719 6.15512 5.881L8.00012 2.223L9.84712 5.881C9.88447 5.95719 9.93974 6.02319 10.0082 6.07335C10.0766 6.12351 10.1562 6.15633 10.2401 6.169L14.2921 6.744L11.3861 9.514C11.3195 9.57849 11.2698 9.65839 11.2414 9.74663C11.213 9.83487 11.2067 9.92876 11.2231 10.02L11.9171 13.977L8.23112 12.083C8.15984 12.0463 8.08081 12.0271 8.00062 12.0271C7.92043 12.0271 7.8414 12.0463 7.77012 12.083H7.77112Z"></path></SVG>

            <SVG viewBox="0 0 16 16"><path d="M2.86612 14.85C2.78812 15.294 3.22612 15.641 3.61212 15.443L8.00212 13.187L12.3911 15.443C12.7771 15.641 13.2151 15.294 13.1371 14.851L12.3071 10.121L15.8291 6.765C16.1591 6.451 15.9891 5.877 15.5471 5.815L10.6491 5.119L8.46512 0.791999C8.42351 0.704288 8.35787 0.630182 8.27583 0.578292C8.19378 0.526401 8.0987 0.498856 8.00162 0.498856C7.90454 0.498856 7.80945 0.526401 7.72741 0.578292C7.64536 0.630182 7.57972 0.704288 7.53812 0.791999L5.35412 5.12L0.456118 5.816C0.0151183 5.878 -0.155882 6.452 0.173118 6.766L3.69612 10.122L2.86612 14.852V14.85ZM7.77112 12.083L4.08512 13.977L4.77912 10.02C4.79538 9.92891 4.78902 9.83523 4.76059 9.74717C4.73217 9.65912 4.68256 9.57939 4.61612 9.515L1.71012 6.745L5.76212 6.169C5.84602 6.15633 5.92561 6.12351 5.99405 6.07335C6.0625 6.02319 6.11776 5.95719 6.15512 5.881L8.00012 2.223L9.84712 5.881C9.88447 5.95719 9.93974 6.02319 10.0082 6.07335C10.0766 6.12351 10.1562 6.15633 10.2401 6.169L14.2921 6.744L11.3861 9.514C11.3195 9.57849 11.2698 9.65839 11.2414 9.74663C11.213 9.83487 11.2067 9.92876 11.2231 10.02L11.9171 13.977L8.23112 12.083C8.15984 12.0463 8.08081 12.0271 8.00062 12.0271C7.92043 12.0271 7.8414 12.0463 7.77012 12.083H7.77112Z"></path></SVG>
        </Wrapper>
    )
}

export default Rating
