class Hotel {
constructor(name,city) {
    this.name = name;
    this.city = city;
    this.reviews = []
}

reviewCount() {
    return this.reviews.length
}

rating() {
    return 0
}

ratingAsStars() {
    return ''
}

urlSlug() {
    return ''
}

}
module.exports = Hotel