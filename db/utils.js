const gamesOrderClause = (orderBy) => {
    const orderMap = {
        'price-ascending': 'ORDER BY price ASC',
        'price-descending': 'ORDER BY price DESC',
        'title-ascending': 'ORDER BY title ASC',
        'title-descending': 'ORDER BY title DESC',
    };

    return orderMap[orderBy] || '';
};

module.exports = { gamesOrderClause };