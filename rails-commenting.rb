# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# 1)this declares a class for the controller related to the BlogPost table in the db. The controller is the logical center of any rails app and in this case it is a place to declare all the logic relating to the blog posts.
class BlogPostsController < ApplicationController
  def index
    # 2)This line of code sets an instance variable of @posts that will be used inside of index.html.erb. this method gets all the items from the table BlogPost. it will show you all the posts.
    @posts = BlogPost.all
  end

  def show
    # 3)This line of code sets an instance variable of @post that will be used inside of show.html.erb. The purpose of the method is to show the user just one blog post (depending on which on they select)
    @post = BlogPost.find(params[:id])
  end

  # 4) This line of code is showing a form how to create a new post in the BlogPosts model. It is setting an instance variable to be used in the file new.html.erb (which will contain a form).  I'm a little bit confused though because it just says Post.new instead of BlogPost.new. 
  # in Active record the "new" method will allow you to make a new record, but it is not saved to the database. 
  def new
    @post = Post.new
  end

  def create
    # 5) this line of code includes an instance variable called @post that creates a new blog post and passes in params. if the post is valid (meaning it includes all the necessary params) then it redirects the user to the path for that new blog post. if it is not valid then it will redirect the user back to the page to create a new post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # 6) this line of code calls the update method on a chosen blog post. params are passed in so that the post can be checked for validity.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 7) this line of code redirects the user back to the same blog post. If they were trying to destroy a post but cannot for some reason, they will be sent back to the post to continue making edits.
      redirect_to blog_post_path(@post)
    end
  end

  # 8) this creates a private method. It makes it so you can only call this method from inside of the class where it is defined. 
#   You can only use private methods with:

        # Other methods from the same class
        # Methods inherited from the parent class
        # Methods included from a module
        
  private
  def blog_post_params
    # 9) this method sets the required parameters for the blog post to be valid. If it doesn't have both a title and content then its not valid.
    params.require(:blog_post).permit(:title, :content)
  end

end


# FILE: app/models/blog_post.rb

class BlogPost < ApplicationRecord
  # 10) this links the blog posts table to the comments table. it means that the class Comments belongs_to the class BlogPost.
  has_many :comments
end
