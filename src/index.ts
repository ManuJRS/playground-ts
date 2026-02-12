import {members, payments} from './data/mock.data'
import { Member, Payment } from './types/domain.types'

// obten un arreglo con 
const buildMemberLable = (member:Member):string => {
    return `${member.fullName} (${member.status}) - ${member.points} pts`
}
const getMemberLable:string[] = members.map(buildMemberLable)

console.log(getMemberLable);

// obten un arreglo con id amount y currency del objeto

const buildPaymentIdAmountCurrency = (payment:Payment): string => {
    return `${payment.memberId}, total: ${payment.amount} ${payment.currency}`
}
const getPaymentIdAmountCurrency:string[] = payments.map(buildPaymentIdAmountCurrency)

console.log(getPaymentIdAmountCurrency);

// Obten un nuevo arreglo de member card + tipado

type MemberCard = {
    id: string
    name: string
    isActive: boolean
}

const buildMemberCard = (member:Member):MemberCard=> {
    return {
        id: member.id,
        name: member.fullName,
        isActive: member.status === "ACTIVE"
    }
}

const getMemberCard: MemberCard[] =  members.map(buildMemberCard)

console.log(getMemberCard);