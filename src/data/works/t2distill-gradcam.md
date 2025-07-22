---
title: 'T2Distill-GradCAM'
isFeatured: true
description: My undergraduate thesis: a novel framework for training computer vision models.
techStack: ['Python', 'TensorFlow', 'Keras']
---

T2Distill-GradCAM is a novel framework based on the Vision Transformer (ViT) architecture, leveraging advanced machine learning techniques such as Knowledge Distillation (KD), Class Activation Mapping (CAM), Convolutional Neural Networks (CNN), and Convolutional Autoencoders (CAE).

This framework is the result of our undergraduate thesis, for which [Denise](https://github.com/PatriciaDeniseP), [Clarisse](https://github.com/ClarisseSalazar), and I labored for almost a year, featuring a cross-architecture two-teacher knowledge distillation framework that extracts CAM images from a CNN, passes it to a CAE, and aligns the CAE’s feature maps with that of the ViT using spatial alignment.

This approach resulted in a test accuracy score of 78.74%, surpassing the baseline model’s accuracy of 77.24%. The study won first place at the University of Santo Tomas Core Computer Science Research Colloquium.