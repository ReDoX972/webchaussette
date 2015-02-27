from setuptools import setup

setup(
    name='Web Chaussette',
    version='1.0',
    long_description='Web sockets tests',
    license='MIT',
    author_email='harrison.ledoux@gmail.com'
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
    	'Flask',
    	'Jinja2',
    	'gunicorn',
    ]
)

#http://www.plankandwhittle.com/packaging-a-flask-web-app/