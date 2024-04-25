const postPaid = (past, now) => {

    let totalUsage = now - past
    
    const lowUsage = 50 * 1500
    const mediumUsage = 50 * 1350
    const highUsage = (totalUsage - 100) * 1200
    const subsFee = 50000
    
    let totalPaid
    
    if (totalUsage <= 50) {
        totalPaid = lowUsage + subsFee
    } else if (totalUsage > 50 && totalUsage <= 100) {
        totalPaid = mediumUsage + subsFee
    } else {
        totalPaid = lowUsage + mediumUsage + highUsage + subsFee
    }

    return totalPaid
}

const msg = 'Jadi total tagihan pembayaran listrik pak Budi adalah Rp.'
console.log(msg, postPaid(1000, 1050))
