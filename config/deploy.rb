# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'bookmarks_client'
set :repo_url, '/home/tokenvolt/dev/js/bookmarks-client/builds/production'
# set :repo_url, 'git@gitlab.tokenvolt.io:tokenvolt/bookmarks-client.git'

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app
set :deploy_to, "/home/vagrant/apps/#{fetch(:application)}"

# Default value for :scm is :git
set :scm, :local
set :local_strategy, :archive

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 5

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # Your restart mechanism here, for example:
      # execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  desc 'Build app'
  task :build do
    run_locally do
      execute "NODE_ENV=production", :gulp, :clean
      execute "NODE_ENV=production", :gulp, :build
    end
  end

  after :starting, :build
  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

end


# require 'sshkit'
# require 'sshkit/dsl'

# environment = 'production'
# server = '192.168.40.10'
# deploy_to = "/home/apps/#{application}"

# run_locally do
#   execute "NODE_ENV=#{environment}", :gulp, :clean
#   execute "NODE_ENV=#{environment}", :gulp, :build
# end

# on server do
#   upload!
# end
