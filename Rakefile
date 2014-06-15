require 'digest/md5'
require 'date'

task :default => :build

desc 'Build site'
task :build do
  `jekyll build #{ARGV}`
end

desc 'Build site in dev environment'
task :dev do
  `jekyll build --config _config.yml,_config-dev.yml #{ARGV}`
end

desc 'Create a new post with the current user'
task :addpost do
  now = DateTime.now

  title = ask 'Post Title:'
  slug  = now.strftime('%Y-%m-%d') + '-'
  slug << title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')

  File.write("./_posts/#{slug}.md", <<-FRONTMATTER
---
layout: post
title: #{title}
date: #{now.strftime '%Y-%m-%d %H:%M'}
author: #{File.read('./_whoami')}
---
FRONTMATTER
  )
end

def ask prompt
  print prompt + ' '
  STDIN.gets.chomp
end