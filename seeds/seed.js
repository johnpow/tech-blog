const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogpostData = require('./blogpostData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  
  for (const blogpost of blogpostData) {
    await BlogPost.create({
      ...blogpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const blogposts = await BlogPost.findAll();
  const mappedBlogPosts = blogposts.map(blogpost => blogpost.get({ plain: true }));

  const comments = [
  'This is a comment',
  'This is another comment',
  'This is a third comment'];

  for (let i = 0; i < 3; i++) {
    await Comment.create({
      comment: comments[i],
      user_id: users[i].id,
      blogpost_id: mappedBlogPosts[i].id,
    });

  }

  process.exit(0);
};

seedDatabase();
